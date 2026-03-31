import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for inquiries
  app.post(["/api/inquiry", "/api/inquiry/"], async (req, res) => {
    console.log("Received inquiry request:", req.body);
    const { name, user_email, user_phone, businessDetails } = req.body;

    if (!name || !user_email || !user_phone) {
      console.warn("Missing required fields in inquiry request");
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_PASS;

      // Only attempt to send if credentials are provided and not empty
      if (emailUser && emailPass && emailUser.trim() !== "" && emailPass.trim() !== "") {
        console.log("Attempting to send email via Nodemailer...");
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass
          }
        });

        const mailOptions = {
          from: emailUser,
          to: 'advantageousmedia1@gmail.com',
          subject: `New Discovery Call Inquiry from ${name}`,
          text: `
            New Inquiry Details:
            --------------------
            Name: ${name}
            Email: ${user_email}
            Phone: ${user_phone}
            
            Business & Goals:
            ${businessDetails || 'No details provided.'}
          `,
          html: `
            <h3>New Discovery Call Inquiry</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${user_email}</p>
            <p><strong>Phone:</strong> ${user_phone}</p>
            <p><strong>Business & Goals:</strong></p>
            <p>${businessDetails ? businessDetails.replace(/\n/g, '<br>') : 'No details provided.'}</p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully to advantageousmedia1@gmail.com for inquiry from ${user_email}`);
      } else {
        console.warn("Email credentials not found or incomplete. Skipping email send. (Check EMAIL_USER and EMAIL_PASS in .env)");
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error processing inquiry/sending email:", error);
      res.status(500).json({ error: "Failed to process inquiry. Please check server logs." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Error handler
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("Unhandled server error:", err);
    res.status(err.status || 500).json({ error: err.message || "Internal server error" });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

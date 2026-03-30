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
  app.post("/api/inquiry", async (req, res) => {
    const { name, email, phone, businessDetails } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Configure your email transport here
      // For Gmail, you might need an App Password if 2FA is enabled
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Your gmail address
          pass: process.env.EMAIL_PASS  // Your gmail app password
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'advantageousmedia1@gmail.com',
        subject: `New Discovery Call Inquiry from ${name}`,
        text: `
          New Inquiry Details:
          --------------------
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          
          Business & Goals:
          ${businessDetails || 'No details provided.'}
        `,
        html: `
          <h3>New Discovery Call Inquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business & Goals:</strong></p>
          <p>${businessDetails ? businessDetails.replace(/\n/g, '<br>') : 'No details provided.'}</p>
        `
      };

      // Only attempt to send if credentials are provided
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to advantageousmedia1@gmail.com for inquiry from ${email}`);
      } else {
        console.warn("Email credentials not found. Skipping email send. (Check .env)");
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to process inquiry" });
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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

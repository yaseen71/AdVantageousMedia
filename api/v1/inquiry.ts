import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle GET requests for testing
  if (req.method === 'GET') {
    return res.status(200).json({ message: "Inquiry endpoint is active. Use POST to submit an inquiry." });
  }

  // Only allow POST requests for submission
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log("Received inquiry request on Vercel:", req.body);
  const { name, user_email, user_phone, businessDetails } = req.body;

  if (!name || !user_email || !user_phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    // Only attempt to send if credentials are provided
    if (emailUser && emailPass && emailUser.trim() !== "" && emailPass.trim() !== "") {
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
      console.log(`Email sent successfully for inquiry from ${user_email}`);
    } else {
      console.warn("Email credentials not found in Vercel environment variables.");
      // We still return success to the user, but log the warning on the server
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Error processing inquiry on Vercel:", error);
    
    // Provide more helpful error message for common Nodemailer issues
    let errorMessage = "Failed to process inquiry.";
    if (error.code === 'EAUTH') {
      errorMessage = "Email authentication failed. Check Vercel environment variables (EMAIL_USER/EMAIL_PASS).";
    } else if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
      errorMessage = "Connection to email server timed out. Check your network or Gmail settings.";
    } else if (error.code === 'ESOCKET') {
      errorMessage = "Network socket error. Gmail might be blocking the connection.";
    }
    
    return res.status(500).json({ 
      error: errorMessage,
      details: error.message 
    });
  }
}

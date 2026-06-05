import nodemailer from "nodemailer";
import type { ContactFormData } from "@/lib/validations/contact";

export async function sendContactNotification(data: ContactFormData) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
    return { sent: false, reason: "Email not configured" };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${SMTP_USER}>`,
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `New Contact: ${data.name}${data.organization ? ` — ${data.organization}` : ""}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Organization: ${data.organization || "N/A"}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px;">
        <h2 style="color: #0F172A;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Organization:</strong> ${data.organization || "N/A"}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; color: #334155;">${data.message}</p>
      </div>
    `,
  });

  return { sent: true };
}

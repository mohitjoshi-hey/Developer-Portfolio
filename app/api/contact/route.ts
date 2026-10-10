import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: "Email and message are required." },
        { status: 400 }
      );
    }

    if (!resend) {
      // In development or when RESEND_API_KEY is not configured yet,
      // acknowledge receipt gracefully so the user experience isn't broken.
      console.log("Contact message received (RESEND_API_KEY not set):", {
        name,
        email,
        subject,
        message,
      });

      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been received.",
      });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "joshimohit1981@gmail.com",
      replyTo: email,
      subject: subject || `New Portfolio Message from ${name || email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #111; max-width: 600px; border: 1px solid #eaeaea; border-radius: 12px;">
          <h2 style="color: #4f46e5; margin-top: 0;">📨 New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name || "Not provided"}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="white-space: pre-wrap; line-height: 1.6; font-size: 15px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
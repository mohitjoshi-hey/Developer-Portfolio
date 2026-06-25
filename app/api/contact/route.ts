import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "25btcs080@iiitu.ac.in", // 👈 Replace with your email
      subject: `New Portfolio Message from ${email}`,
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>📨 New Portfolio Message</h2>

          <p><strong>From:</strong> ${email}</p>

          <hr />

          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
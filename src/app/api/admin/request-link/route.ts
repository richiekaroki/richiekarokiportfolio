import { NextResponse } from "next/server";
import { generateToken, isAdminEmail } from "@/lib/auth";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://richiekaroki.vercel.app";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  if (!isAdminEmail(email)) {
    return NextResponse.json({ error: "Unauthorized email" }, { status: 403 });
  }

  const token = generateToken(email);
  const link = `${BASE_URL}/admin/verify?token=${token}`;

  // Send email via Resend
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio Admin <onboarding@resend.dev>",
      to: email,
      subject: "Your admin login link",
      html: `
        <div style="font-family: sans-serif; max-width: 400px; margin: 40px auto;">
          <h2 style="color: #1a1a2e;">Admin Login</h2>
          <p>Click the button below to access your dashboard. This link expires in 15 minutes.</p>
          <a href="${link}" style="display: inline-block; padding: 12px 24px; background: #0ea5e9; color: white; text-decoration: none; border-radius: 8px; margin: 16px 0;">
            Login to Dashboard
          </a>
          <p style="color: #888; font-size: 12px;">If you didn't request this, ignore this email.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send magic link:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

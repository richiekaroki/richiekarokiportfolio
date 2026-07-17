"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return { error: "Message is required" };
  }
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { error: "Name is required" };
  }
  if (!SenderEmail || typeof SenderEmail !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(SenderEmail)) {
    return { error: "Valid email is required" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "karokirichard522@gmail.com",
      subject: `${name} From Contact Form.`,
      replyTo: SenderEmail,
      text: `sender email: ${SenderEmail}\n\n${message}`,
    });
  } catch (err) {
    return { error: "Failed to send email. Please try again." };
  }

  return redirect("/");
};

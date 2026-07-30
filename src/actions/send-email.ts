"use server";

import { Resend } from "resend";
import { revalidatePath } from "next/cache";

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

export const SendEmail = async (formdata: FormData) => {
  // Honeypot — bots fill this, humans don't
  const website = formdata.get("website");
  if (website) return { success: true };

  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return { error: "Message is required" };
  }
  if (message.length > MAX_MESSAGE) {
    return { error: `Message must be under ${MAX_MESSAGE} characters` };
  }
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { error: "Name is required" };
  }
  if (name.length > MAX_NAME) {
    return { error: `Name must be under ${MAX_NAME} characters` };
  }
  if (!SenderEmail || typeof SenderEmail !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(SenderEmail)) {
    return { error: "Valid email is required" };
  }
  if (SenderEmail.length > MAX_EMAIL) {
    return { error: "Email is too long" };
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
  } catch {
    return { error: "Failed to send email. Please try again." };
  }

  revalidatePath("/");
  return { success: true };
};

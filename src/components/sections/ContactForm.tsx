"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTransition, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SendEmail } from "@/actions/send-email";
import { CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const placeholders: Record<string, string> = {
  consulting: "Tell me about your project, timeline, and what you need built...",
  tutoring: "What topics are you interested in learning? Any prior experience?",
};

const ContactForm = ({ onTyping, onSubmitStart }: { onTyping?: (typing: boolean) => void; onSubmitStart?: () => void }) => {
  const searchParams = useSearchParams();
  const inquiryType = searchParams.get("type") === "tutoring" ? "tutoring" : "consulting";
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (formData: FormData) => {
    onSubmitStart?.();
    startTransition(async () => {
      setError(null);
      setSuccess(false);
      const result = await SendEmail(formData);
      if (result && "error" in result) {
        setError(result.error as string);
        toast.error("Failed to send message", { description: result.error as string });
      } else {
        setSuccess(true);
        toast.success("Message sent!", { description: "I'll get back to you within 24 hours." });
      }
    });
  };

  return (
    <Card>
      <form
        action={handleSubmit}
        aria-label="Contact form"
      >
        <CardHeader>
          <CardTitle className="icon_underline">Send me a message</CardTitle>
          <CardDescription>
            {inquiryType === "tutoring"
              ? "Tell me what you want to learn. I'll get back to you within 24 hours."
              : "Tell me about your project. I'll get back to you within 24 hours."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Honeypot — hidden from humans, bots will fill it */}
          <div className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden" aria-hidden="true">
            <Label htmlFor="website">Website</Label>
            <Input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          {error ? (
            <div role="alert" className="flex items-center gap-2 p-3 mb-4 text-sm text-destructive bg-destructive/10 rounded-md">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          ) : null}
          {success ? (
            <div role="status" className="flex items-center gap-2 p-3 mb-4 text-sm text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 rounded-md">
              <CheckCircle className="h-4 w-4 flex-shrink-0" />
              <span>Message sent successfully!</span>
            </div>
          ) : null}
          <div className="grid w-full items-center gap-1.5 mt-2">
            <Label htmlFor="name">Name <span className="text-destructive" aria-hidden="true">*</span></Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
              autoComplete="name"
              placeholder="Your name"
              onFocus={() => onTyping?.(true)}
              onBlur={() => onTyping?.(false)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-2">
            <Label htmlFor="SenderEmail">Email <span className="text-destructive" aria-hidden="true">*</span></Label>
            <Input
              type="email"
              id="SenderEmail"
              name="SenderEmail"
              required
              aria-required="true"
              autoComplete="email"
              placeholder="you@example.com"
              onFocus={() => onTyping?.(true)}
              onBlur={() => onTyping?.(false)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-2">
            <Label htmlFor="message">Message <span className="text-destructive" aria-hidden="true">*</span></Label>
            <textarea
              id="message"
              placeholder={placeholders[inquiryType]}
              name="message"
              required
              aria-required="true"
              onFocus={() => onTyping?.(true)}
              onBlur={() => onTyping?.(false)}
              className="resize-y flex min-h-[120px] h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isPending} aria-live="polite">
            {isPending ? "Sending..." : "Send message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;

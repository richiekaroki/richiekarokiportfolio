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
import { Button } from "./ui/button";
import { useTransition } from "react";
import { SendEmail } from "@/actions/send-email";

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <Card>
      <form
        action={(formData) => {
          startTransition(async () => {
            await SendEmail(formData);
          });
        }}
      >
        <CardHeader>
          <CardTitle className="icon_underline">Send me a message</CardTitle>
          <CardDescription>
            Your message will be sent and you&apos;ll be redirected to the homepage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="SenderEmail">Email</Label>
            <Input
              type="email"
              id="SenderEmail"
              name="SenderEmail"
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Your message here..."
              name="message"
              required
              className="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Sending..." : "Send message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;

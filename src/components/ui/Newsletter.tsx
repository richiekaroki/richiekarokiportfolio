"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    toast.success("Subscribed!", { description: "You'll get notified when I publish new content." });
    setEmail("");
  };

  return (
    <div className="w-full p-6 rounded-lg border bg-secondary/50">
      <div className="flex items-center gap-3 mb-2">
        <Mail className="h-5 w-5 text-primary-sky" />
        <h3 className="text-lg font-source-serif text-primary font-semibold">Stay updated</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Get notified when I publish new projects, blog posts, or open-source work.
      </p>
      {submitted ? (
        <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
          <CheckCircle className="h-4 w-4" />
          You&apos;re subscribed!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" size="sm">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}

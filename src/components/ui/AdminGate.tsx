"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, Lock } from "lucide-react";

export default function AdminGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if already logged in via session cookie (server validates)
    fetch("/api/admin/me")
      .then((r) => r.json())
      .then((data) => {
        if (data.authenticated) setAuthenticated(true);
      })
      .catch(() => {})
      .finally(() => setChecking(false));
  }, []);

  const requestLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/request-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        const data = await res.json();
        setErrorMsg(data.error === "Unauthorized email" ? "This email is not authorized." : "Failed to send link.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  };

  if (checking) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (authenticated) return <>{children}</>;

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-sm mx-4 p-6 rounded-xl border bg-secondary/30">
        <div className="flex items-center gap-3 mb-4">
          <Lock className="h-5 w-5 text-primary-sky" />
          <h2 className="text-lg font-source-serif font-semibold text-primary">Admin Access</h2>
        </div>

        {status === "sent" ? (
          <div className="text-center py-4">
            <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              Check your inbox for a login link.
            </p>
            <p className="text-xs text-muted-foreground mt-1">Link expires in 15 minutes.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-4">
              Enter your email to receive a login link.
            </p>
            <form onSubmit={requestLink} className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrorMsg(""); }}
                  autoFocus
                  required
                />
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Link"}
                </Button>
              </div>
              {status === "error" && (
                <p className="text-sm text-destructive">{errorMsg}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

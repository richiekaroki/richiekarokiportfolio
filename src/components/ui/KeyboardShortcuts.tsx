"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const shortcuts = [
  { keys: ["?"], description: "Toggle shortcuts" },
  { keys: ["g", "h"], description: "Go to Home" },
  { keys: ["g", "a"], description: "Go to About" },
  { keys: ["g", "p"], description: "Go to Projects" },
  { keys: ["g", "c"], description: "Go to Contact" },
  { keys: ["t"], description: "Toggle dark mode" },
  { keys: ["Escape"], description: "Close this modal" },
];

export default function KeyboardShortcuts() {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "Escape") {
        setOpen(false);
        setPending(null);
        return;
      }

      if (e.key === "?") {
        setOpen((o) => !o);
        setPending(null);
        return;
      }

      if (pending === "g") {
        setPending(null);
        const routes: Record<string, string> = {
          h: "/",
          a: "/about",
          p: "/projects",
          c: "/contact",
        };
        if (routes[e.key]) {
          window.location.href = routes[e.key];
        }
        return;
      }

      if (e.key === "g") {
        setPending("g");
        return;
      }

      if (e.key === "t") {
        document.querySelector<HTMLButtonElement>("[aria-label*='Switch to']")?.click();
        return;
      }

      setPending(null);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [pending]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-background border border-border rounded-xl shadow-2xl p-6 w-full max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-source-serif font-semibold text-primary">Keyboard Shortcuts</h2>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-3">
          {shortcuts.map((s) => (
            <div key={s.description} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.description}</span>
              <div className="flex gap-1">
                {s.keys.map((k) => (
                  <kbd
                    key={k}
                    className="px-2 py-0.5 text-xs font-mono bg-secondary rounded border border-border text-primary"
                  >
                    {k}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground text-center">
          Press <kbd className="px-1.5 py-0.5 text-xs font-mono bg-secondary rounded border border-border">?</kbd> to toggle
        </p>
      </div>
    </div>
  );
}

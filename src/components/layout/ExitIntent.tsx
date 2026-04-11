"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Don't show on contact or thank you pages
    if (pathname === "/contact" || pathname === "/thank-you") return;

    // Check if already shown in this session or recently
    const hasSeenPopup = localStorage.getItem("pyrite_exit_intent_shown");
    const lastShownDate = localStorage.getItem("pyrite_exit_intent_date");

    if (hasSeenPopup === "true") return;

    if (lastShownDate) {
      const daysSinceLastShown = (Date.now() - parseInt(lastShownDate)) / (1000 * 60 * 60 * 24);
      if (daysSinceLastShown < 7) return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        localStorage.setItem("pyrite_exit_intent_shown", "true");
        localStorage.setItem("pyrite_exit_intent_date", Date.now().toString());
        // Remove listener after triggering
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-secondary">
            Before You Go — Let&apos;s Have a Confidential Chat
          </DialogTitle>
          <DialogDescription className="text-base text-foreground mt-2">
            No commitment. Just a conversation about your options. We understand that selling a business is a major decision.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-col gap-3 mt-6">
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Book a Free 30-Min Call
            </Link>
          </Button>
          <Button variant="ghost" onClick={() => setOpen(false)} className="w-full">
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ExitIntent;

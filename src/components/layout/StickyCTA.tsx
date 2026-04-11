"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { openCalendly } from "@/lib/constants";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Don't show on contact or thank you pages
    if (pathname === "/contact" || pathname === "/thank-you") {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Calculate how far down the page we are
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = scrollY / (documentHeight - windowHeight);

      // Look for contact section to hide the CTA when reached
      const contactSection = document.getElementById("contact-section");
      let contactSectionTop = documentHeight;

      if (contactSection) {
        contactSectionTop = contactSection.getBoundingClientRect().top + scrollY;
      }

      // Show after 30% scroll, hide when near the contact section
      if (scrollPercentage > 0.3 && scrollY + windowHeight < contactSectionTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed z-40 bottom-0 left-0 w-full md:w-auto md:bottom-8 md:right-8 md:left-auto"
        >
          {/* Mobile version (full width bottom) */}
          <div className="md:hidden">
            <Button
              onClick={openCalendly}
              className="w-full rounded-none bg-primary hover:bg-primary/90 text-secondary py-7 text-lg font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              Talk to Us <ArrowRight size={20} />
            </Button>
          </div>

          {/* Desktop version (floating button) */}
          <div className="hidden md:block">
            <Button
              onClick={openCalendly}
              className="rounded-full bg-primary hover:bg-primary/90 text-secondary py-7 px-8 text-lg font-semibold shadow-xl border-2 border-primary-foreground/20 hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              Talk to Us <ArrowRight size={20} />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StickyCTA;

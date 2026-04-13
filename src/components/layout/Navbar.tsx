"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import { openCalendly } from "@/lib/constants";

const trackedOpenCalendly = (location: string) => {
  track("cta_click", { location, label: "Talk to Us" });
  openCalendly();
};

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "For Sellers", href: "/sell" },
    { label: "Contact", href: "/contact" }
  ];

  // On the home page the hero is dark, so we can use transparent + white text until scrolled.
  // On all other pages the background is light, so always use the solid white style.
  const isHome = pathname === "/";
  const useDarkBg = isHome && !scrolled;

  return (
    <>
    {/* Mobile Menu Backdrop — outside header so z-index layers correctly */}
    {isMobileMenuOpen && (
      <div
        className="md:hidden fixed inset-0 bg-black/30 z-40"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
    )}
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        useDarkBg ? "bg-transparent py-5" : "bg-white/95 backdrop-blur-md shadow-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl xl:max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">
              Pyrite Ventures
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary py-2 px-1 ${
                    useDarkBg ? "text-white/90 hover:text-white" : "text-foreground"
                  } ${pathname === link.href ? "!text-primary" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button
              data-testid="nav-cta-button"
              data-event="nav-cta"
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-0"
              onClick={() => trackedOpenCalendly("navbar")}
            >
              Talk to Us
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-3 -mr-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X aria-hidden="true" className={useDarkBg ? "text-white" : "text-foreground"} />
            ) : (
              <Menu aria-hidden="true" className={useDarkBg ? "text-white" : "text-foreground"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-border py-4 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium py-3 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="w-full bg-primary hover:bg-primary/90 mt-2"
            onClick={() => { trackedOpenCalendly("mobile-menu"); setIsMobileMenuOpen(false); }}
          >
            Talk to Us
          </Button>
        </div>
      )}
    </header>
    </>
  );
}

export default Navbar;

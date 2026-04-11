import Link from "next/link";
import { Linkedin, MessageCircle, Phone } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary block">
              Pyrite Ventures
            </Link>
            <p className="text-secondary-foreground/85 font-medium text-lg">
              Built to Acquire. Driven to Scale.
            </p>
            <p className="text-secondary-foreground/75 max-w-xs mt-4">
              We acquire and grow service-based businesses in India with a founder-first philosophy.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-foreground/85 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-foreground/85 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-secondary-foreground/85 hover:text-primary transition-colors">
                  For Sellers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-foreground/85 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Contact</h4>
            <ul className="space-y-2 text-secondary-foreground/85">
              <li>
                <a href="mailto:info@pyriteventures.com" className="hover:text-primary transition-colors">
                  info@pyriteventures.com
                </a>
              </li>
              <li>
                <a href="tel:+910000000000" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                  <Phone size={14} aria-hidden="true" /> +91 00000 00000
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/90 hover:bg-[#25D366] transition-colors text-white"
                  data-event="footer-whatsapp"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  <span className="sr-only">WhatsApp (placeholder)</span>
                </a>
                <a
                  href={LINKEDIN_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors text-white"
                  data-event="footer-linkedin"
                >
                  <Linkedin size={20} aria-hidden="true" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/75">
          <p>© 2026 Pyrite Ventures. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

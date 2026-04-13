import Link from "next/link";
import { Linkedin } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-2 space-y-4">
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
            <ul className="space-y-1">
              <li>
                <Link href="/" className="inline-block py-2 text-secondary-foreground/85 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-block py-2 text-secondary-foreground/85 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sell" className="inline-block py-2 text-secondary-foreground/85 hover:text-primary transition-colors">
                  For Sellers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-block py-2 text-secondary-foreground/85 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Contact</h4>
            <ul className="space-y-2 text-secondary-foreground">
              <li>
                <a href="mailto:info@pyriteventures.com" className="inline-block py-1 hover:text-primary transition-colors break-all">
                  info@pyriteventures.com
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href={LINKEDIN_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors text-white"
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
            <Link href="/privacy-policy" className="inline-block py-2 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="inline-block py-2 hover:text-primary transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { ExitIntent } from "@/components/layout/ExitIntent";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pyriteventures.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pyrite Ventures — We Acquire and Grow Service Companies in India",
  description:
    "Pyrite Ventures acquires and grows service-based businesses across India. Founder-first, confidential, and built for long-term ownership. If you're thinking of selling, let's talk.",
  keywords:
    "business acquisition India, sell my business India, acquire service companies India, business buyer India, founder-led acquisition",
  openGraph: {
    type: "website",
    url: "https://pyriteventures.com/",
    title: "Pyrite Ventures — We Acquire and Grow Service Companies in India",
    description:
      "Thinking of selling your business? Pyrite Ventures offers a confidential, founder-friendly acquisition process for Indian service businesses.",
    images: [{ url: "/opengraph.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyrite Ventures — We Acquire and Grow Service Companies in India",
    description:
      "Thinking of selling your business? Pyrite Ventures offers a confidential, founder-friendly acquisition process for Indian service businesses.",
    images: ["/opengraph.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ErrorBoundary>
            <div className="flex flex-col min-h-[100dvh]">
              <Navbar />
              <main className="flex-1 flex flex-col">{children}</main>
              <Footer />
              <StickyCTA />
              <ExitIntent />
              <Toaster />
            </div>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}

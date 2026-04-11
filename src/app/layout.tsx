import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { ExitIntent } from "@/components/layout/ExitIntent";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PrototypeBadge } from "@/components/PrototypeBadge";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pyriteventures.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pyrite Ventures — We Acquire and Grow Service Companies in India",
  description:
    "Pyrite Ventures acquires and grows service-based businesses across India. Founder-first, confidential, and built for long-term ownership.",
  keywords:
    "business acquisition India, sell my business India, acquire service companies India, business buyer India, founder-led acquisition",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Pyrite Ventures — We Acquire and Grow Service Companies in India",
    description:
      "Thinking of selling your business? Pyrite Ventures offers a confidential, founder-friendly acquisition process for Indian service businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyrite Ventures — We Acquire and Grow Service Companies in India",
    description:
      "Thinking of selling your business? Pyrite Ventures offers a confidential, founder-friendly acquisition process for Indian service businesses.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

// Schema.org structured data — helps SEO and is valid JSON-LD even with placeholder data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pyrite Ventures",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Pyrite Ventures acquires and grows service-based businesses across India.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this process confidential? Will my employees find out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We never contact your employees, suppliers, or customers during the evaluation process. We sign an NDA before any detailed information is shared.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to fully exit? Can I stay involved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Many of our acquisition structures allow founders to remain involved as an advisor, part-time leader, or operational partner.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the process take from first call to close?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 8 to 16 weeks from first call to signing. We move at your pace, never ours.",
      },
    },
    {
      "@type": "Question",
      name: "What industries and revenue sizes do you target?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Healthcare, wellness, allied health, and professional services businesses with ₹5Cr to ₹100Cr in annual revenue.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Providers>
          <ErrorBoundary>
            <div className="flex flex-col min-h-[100dvh]">
              <Navbar />
              <main id="main-content" className="flex-1 flex flex-col">
                {children}
              </main>
              <Footer />
              <StickyCTA />
              <ExitIntent />
              <Toaster />
              <PrototypeBadge />
            </div>
          </ErrorBoundary>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

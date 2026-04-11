"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export default function ThankYou() {
  return (
    <div className="w-full pt-32 pb-24 bg-card min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-border text-center"
        >
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">
            Thank you for reaching out.
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Your information has been received securely. We treat all inquiries with the strictest confidentiality. Our team will review your details and contact you within 24 hours.
          </p>

          <div className="bg-card p-6 rounded-xl border border-border mb-10 text-left">
            <h3 className="font-semibold text-secondary text-lg mb-3">Next Steps:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">1</div>
                <span className="text-muted-foreground">A senior partner will review your inquiry.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">2</div>
                <span className="text-muted-foreground">We will reach out via email to schedule a brief introductory call.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">3</div>
                <span className="text-muted-foreground">If mutual interest exists, we&apos;ll sign an NDA before reviewing any financials.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">Want to schedule your call right away?</p>
            <Button asChild size="lg" className="w-full text-lg py-6 bg-[#006BFF] hover:bg-[#005AE0] text-white">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" /> Book via Calendly
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full text-lg py-6 mt-4">
              <Link href="/" className="flex items-center justify-center gap-2">
                Return to Home <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { openCalendly } from "@/lib/constants";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Contact() {
  return (
    <div className="w-full pt-24 pb-12 bg-card min-h-screen">
      {/* HEADER */}
      <section className="bg-secondary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Book a Confidential 30-Minute Call</h1>
            <p className="text-lg text-white/80 font-light">
              No pressure. No obligations. Let&apos;s discuss your business and your goals for the future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Calendly Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-5"
            >
              <div className="bg-white p-8 rounded-xl border border-border shadow-sm h-full flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-secondary mb-4">Schedule Directly</h3>
                <p className="text-muted-foreground mb-8">
                  Pick a time that works for you. Click below to open our scheduling page and choose a slot that suits you.
                </p>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="w-full text-lg py-6 bg-[#006BFF] hover:bg-[#005AE0] text-white flex items-center justify-center gap-2"
                >
                  Book via Calendly <ExternalLink className="w-5 h-5" />
                </Button>
                <div className="mt-8 pt-8 border-t border-border w-full">
                  <p className="text-sm text-muted-foreground">
                    Or email us directly at:<br/>
                    <a href="mailto:info@pyriteventures.com" className="text-primary font-medium hover:underline mt-1 inline-block">info@pyriteventures.com</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7"
            >
              <div className="h-full">
                <LeadForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import LeadForm from "@/components/LeadForm";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Sell() {
  return (
    <div className="w-full pt-24 pb-12 bg-card">
      {/* HEADER */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Ready to Sell Your Business?</h1>
            <p className="text-lg sm:text-xl text-white/80 font-light">
              A transparent, founder-friendly acquisition process designed to protect your legacy and reward your hard work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT & FORM LAYOUT */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Left Column: Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div variants={fadeInUp} className="mb-12">
                <h2 className="font-serif text-3xl font-bold text-secondary mb-4">Our Ideal Target</h2>
                <p className="text-lg text-muted-foreground mb-6">If your business matches these criteria, we should talk.</p>

                <ul className="space-y-4">
                  {[
                    "Healthcare, Wellness, or Professional Services",
                    "₹5Cr – ₹100Cr in Annual Revenue",
                    "Profitable or path to profitability",
                    "Located in India (Metros & Tier-2)",
                    "Founder-led and operated",
                    "3+ years of operating history"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl border border-border shadow-sm mb-12">
                <h3 className="font-serif text-2xl font-bold text-secondary mb-4">The Pyrite Promise</h3>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">100% Confidential</h4>
                    <p>We sign an NDA immediately. No employees, competitors, or customers will know we are talking.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Founder-Friendly Terms</h4>
                    <p>Clear valuations, straightforward diligence, and deal structures that match your goals.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Legacy Protection</h4>
                    <p>We are not a private equity firm looking to slash costs. We invest in your team to grow the business.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="sticky top-24">
                <LeadForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

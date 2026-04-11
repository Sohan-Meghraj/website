"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Shield, Zap, Linkedin } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/constants";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
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
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">About Pyrite Ventures</h1>
            <p className="text-lg sm:text-xl text-white/80 font-light">
              Built by operators. Driven by long-term growth. Dedicated to preserving your legacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-secondary flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-white/20 select-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-32 h-32 fill-current opacity-40">
                    <circle cx="50" cy="38" r="22" />
                    <ellipse cx="50" cy="90" rx="36" ry="26" />
                  </svg>
                  <span className="text-sm mt-2 text-white/30">Founder Photo</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="md:col-span-7 space-y-6 text-lg text-muted-foreground"
            >
              <h2 className="font-serif text-4xl font-bold text-secondary mb-2">The Founder&apos;s Story</h2>
              <p className="text-xl font-medium text-primary mb-6">Founder & CEO, Pyrite Ventures</p>

              <p>
                Pyrite Ventures was born from a simple observation: great service businesses in India are often acquired by financial buyers who strip costs, disrupt culture, and prioritize short-term exits.
              </p>
              <p>
                Our founder built Pyrite to offer a different path. With over 20 years of experience driving digital transformation and top-line growth at leading healthcare and financial services organizations, our CEO brings a deep understanding of operational excellence and industry innovation.
              </p>
              <p>
                &quot;I know what it means to pour your life into building something. A founder&apos;s legacy isn&apos;t just their balance sheet — it&apos;s their team, their customers, and the culture they&apos;ve nurtured.&quot;
              </p>
              <p>
                Pyrite Ventures focuses exclusively on acquiring service-based businesses in India. We bring operational expertise, digital modernization, and a long-term holding perspective. We buy to build, not to flip.
              </p>

              <div className="pt-6">
                <a
                  href={LINKEDIN_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white px-6 py-3 rounded-md font-medium transition-colors text-base"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">Track Record of Excellence</h2>
            <p className="text-lg text-muted-foreground">Over two decades of driving growth and transformation</p>
          </motion.div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
            {[
              { year: "Present", role: "Founder & CEO", company: "Pyrite Ventures", desc: "Leading the acquisition and growth of service-based businesses across India, applying enterprise-grade operational discipline to mid-market companies." },
              { year: "2018–2023", role: "Head of Digital Innovation", company: "Meridian Health Group", desc: "Spearheaded digital innovation initiatives driving top-line growth and modernizing omni-channel healthcare platforms across 12 markets." },
              { year: "2012–2018", role: "Digital Transformation Lead", company: "Apex Insurance Ltd.", desc: "Led large-scale digital transformation programs for a premier financial services organization, optimizing customer delivery and reducing operational costs by 30%." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-card bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-secondary text-xl">{item.role}</h3>
                    <span className="font-serif font-semibold text-primary">{item.year}</span>
                  </div>
                  <div className="text-primary font-medium mb-3">{item.company}</div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">What Makes Pyrite Different</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Shield, title: "Long-Term Stewards", desc: "We are not looking for a quick flip. We buy businesses to hold and grow them for the long haul, protecting your legacy." },
              { icon: Zap, title: "Operational Expertise", desc: "We bring enterprise-grade operational experience, digital modernization, and strategic growth playbooks to your business." },
              { icon: Target, title: "Flexible Deal Structures", desc: "Whether you want a complete exit, partial sale, or to stay on as an operating partner, we design a deal that works for your specific goals." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card p-8 rounded-xl text-center border border-border">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">Ready to have a conversation?</h2>
          <Button asChild size="lg" className="text-lg py-7 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Link href="/contact" className="flex items-center gap-2">
              Book a Confidential Call <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

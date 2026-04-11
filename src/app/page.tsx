"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, LineChart, MapPin, TrendingUp, User, Clock, CheckCircle2, Linkedin } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { openCalendly, LINKEDIN_URL } from "@/lib/constants";

const handleHeroPrimaryClick = () => {
  track("cta_click", { location: "hero", label: "Talk to Us" });
  openCalendly();
};

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

export default function Home() {
  const scrollToCriteria = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('criteria')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] md:min-h-[90vh] flex flex-col justify-center pt-28 pb-16 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: "url('/hero-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/90 to-secondary z-0" />

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            >
              Thinking of Selling Your Business? <br/>
              <span className="text-primary">We Acquire and Grow Service Companies</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 max-w-2xl font-light"
            >
              Founder-first. Long-term ownership. 100% confidential process.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                data-testid="hero-cta-primary"
                data-event="hero-cta-primary"
                className="text-lg py-7 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={handleHeroPrimaryClick}
              >
                Talk to Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg py-7 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent font-semibold"
                onClick={scrollToCriteria}
                data-testid="hero-cta-secondary"
              >
                See If You Qualify
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ACQUISITION CRITERIA */}
      <section id="criteria" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">We Acquire Businesses Like Yours</h2>
            <p className="text-lg text-muted-foreground">
              We focus on established service businesses with proven revenue streams and growth potential across India.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {[
              { icon: Building, title: "Industry", desc: "Healthcare, Wellness, Allied Health, Professional Services — Serving patients, clients, or businesses across India's growing care economy" },
              { icon: LineChart, title: "Revenue Range", desc: "₹5Cr – ₹100Cr annual revenue — We focus on established businesses with proven revenue streams and growth potential" },
              { icon: MapPin, title: "Geography", desc: "India — metros and Tier-2 cities — From Mumbai to Mysore, we acquire across the country" },
              { icon: TrendingUp, title: "Profitability", desc: "Positive EBITDA preferred — Turnarounds considered case-by-case for businesses with strong fundamentals" },
              { icon: User, title: "Ownership", desc: "Founder-led, owner-operated — We value businesses where the founder's fingerprint is still deeply embedded" },
              { icon: Clock, title: "Operating History", desc: "3+ years — Businesses with proven track records, customer loyalty, and operational maturity" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <Button asChild size="lg" className="text-lg py-6 px-10 bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/contact" className="flex items-center gap-2">
                Think you qualify? Let&apos;s talk <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">Sell Your Business in 3 Simple Steps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, unhurried process designed to respect your time and preserve confidentiality.
            </p>
          </motion.div>

          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-border z-0">
              <div className="absolute top-0 left-0 h-full bg-primary w-full origin-left scale-x-0 transition-transform duration-1000" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
            >
              {[
                { step: "01", title: "Confidential Intro Call", desc: "30-minute call to understand your goals. Zero obligation. Zero information shared externally." },
                { step: "02", title: "Evaluation & Offer", desc: "We conduct our review and present a transparent, fair offer within 2–4 weeks." },
                { step: "03", title: "Smooth Transition & Growth", desc: "We work alongside you for a transition that protects your team, customers, and legacy." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-accent border-4 border-white shadow-lg flex items-center justify-center mb-6 z-10 relative">
                    <span className="font-serif text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed px-4">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-20"
          >
            <Button asChild size="lg" className="text-lg py-6 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link href="/contact">Start with a Confidential Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-secondary text-white relative">
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Why Choose Pyrite Ventures</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We are not flippers or brokers. We buy to hold, build, and grow.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="grid grid-cols-2 text-lg font-semibold border-b border-white/10">
              <div className="p-6 md:p-8 text-primary border-r border-white/10">Pyrite Ventures</div>
              <div className="p-6 md:p-8 text-white/50">Traditional PE / Brokers</div>
            </div>

            {[
              ["Long-term ownership (decades)", "Short-term exit (3–5 years)"],
              ["Founder-first philosophy", "Profit-first, metrics-driven"],
              ["Hands-on, embedded leadership", "Passive / board-level only"],
              ["Legacy & culture preserved", "Culture often disrupted"],
              ["Transparent process", "Complex, opaque terms"],
              ["India-focused, culturally aware", "Generic global playbook"]
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i !== 5 ? 'border-b border-white/5' : ''}`}>
                <div className="p-6 flex items-start gap-3 border-r border-white/5 bg-primary/5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-white/90">{row[0]}</span>
                </div>
                <div className="p-6 flex items-start gap-3 opacity-60">
                  <span className="text-white/50">{row[1]}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:col-span-5 relative"
            >
              <div className="h-80 rounded-2xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-secondary via-secondary to-[#2A2A4A] flex items-center justify-center">
                <div className="flex flex-col items-center justify-center select-none">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-[#8B6508] flex items-center justify-center shadow-xl">
                    <span className="font-serif text-5xl font-bold text-white">PV</span>
                  </div>
                  <span className="text-xs mt-4 text-white/50 tracking-wider uppercase">Founder Photo</span>
                </div>
                <div className="absolute inset-0 border-4 border-primary/20 rounded-2xl pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl pointer-events-none" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="md:col-span-7 space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-2">Meet Our Founder</h2>
                <p className="text-xl text-primary font-medium">Founder & CEO, Pyrite Ventures</p>
              </div>

              <motion.div variants={fadeInUp} className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  With over two decades of experience spanning healthcare, digital transformation, and business strategy, our founder has led large-scale growth initiatives at leading healthcare and financial services organizations across India and globally.
                </p>
                <div className="flex items-center gap-4 text-sm font-medium text-secondary/80 mt-4 pb-4 border-b border-border">
                  <span>Meridian Health</span> <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Apex Insurance</span> <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="text-primary">Pyrite Ventures</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-accent p-8 rounded-xl border border-primary/20 relative">
                <div className="text-6xl text-primary/30 absolute top-4 left-4 font-serif leading-none">&quot;</div>
                <p className="text-lg font-serif italic text-secondary/90 relative z-10 pl-6 leading-relaxed">
                  I started Pyrite because I believe great businesses deserve great stewardship — not just a transaction. I know what it means to pour your life into building something. I want to be the partner I wish more founders had.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <a
                  href={LINKEDIN_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white px-8 py-4 rounded-md font-medium transition-colors"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {[
              { stat: "Enterprise", label: "Advisory Experience" },
              { stat: "₹1000+ Cr", label: "Revenue Impact Driven" },
              { stat: "20+ Years", label: "Healthcare & Digital Transformation" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-6 rounded-xl border border-border shadow-sm text-center">
                <div className="font-serif text-3xl font-bold text-secondary mb-2">{item.stat}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 p-6 bg-secondary text-white rounded-2xl"
          >
            <div className="text-center md:border-r border-white/20 px-8">
              <div className="font-serif text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-white/90">businesses evaluated</div>
            </div>
            <div className="text-center md:border-r border-white/20 px-8">
              <div className="font-serif text-3xl font-bold text-primary mb-1">Pan-India</div>
              <div className="text-sm text-white/90">active discussions</div>
            </div>
            <div className="text-center px-8">
              <div className="font-serif text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-white/90">confidential process</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card p-8 rounded-xl border border-border"
            >
              <div className="flex gap-1 text-primary mb-6" role="img" aria-label="5 out of 5 stars">
                {[1,2,3,4,5].map(star => <svg key={star} aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-lg text-secondary italic mb-6">
                &quot;Working with Pyrite felt completely different from every other buyer I met. They genuinely cared about what happened to my team. It wasn&apos;t just a financial transaction for them.&quot;
              </p>
              <div className="font-semibold text-secondary">— Founder, Healthcare Services (Mumbai)</div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card p-8 rounded-xl border border-border"
            >
              <div className="flex gap-1 text-primary mb-6" role="img" aria-label="5 out of 5 stars">
                {[1,2,3,4,5].map(star => <svg key={star} aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-lg text-secondary italic mb-6">
                &quot;The process was transparent from day one. No surprises, no games. Just a fair, founder-friendly conversation about the future of my business.&quot;
              </p>
              <div className="font-semibold text-secondary">— Owner, Wellness Chain (Bangalore)</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Clear answers about our process and philosophy.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-border p-2">
              <AccordionItem value="item-1" className="border-b border-border px-4 py-2">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">Is this process confidential? Will my employees find out?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  Absolutely. We never contact your employees, suppliers, or customers during the evaluation process. All our communications are direct with you. We sign an NDA before any detailed information is shared.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-border px-4 py-2">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">Do I have to fully exit? Can I stay involved?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  Not at all. Many of our acquisition structures allow founders to remain involved — whether as an advisor, part-time leader, or operational partner. We tailor the structure to your goals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-border px-4 py-2">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">How long does the process take from first call to close?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  Typically 8–16 weeks from first call to signing. We move at your pace, never ours. The first call is just a conversation — no pressure, no obligation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-border px-4 py-2">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">What happens to my team after acquisition?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  Your team&apos;s continuity is one of our top priorities. We are not cost-cutters. We grow businesses, and that means investing in the people who made them successful.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-border px-4 py-2">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">What industries and revenue sizes do you target?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  We focus on healthcare, wellness, allied health, and professional services businesses with ₹5Cr to ₹100Cr in annual revenue. If you&apos;re close to these ranges, reach out — we consider each situation individually.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b border-border px-4 py-2">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">Do you operate in my city?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  We acquire businesses across India — metros and Tier-2 cities. Location is rarely a barrier.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="px-4 py-2 border-none">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">How do you determine the valuation of my business?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  Valuation depends on revenue, EBITDA, growth trajectory, customer retention, industry, and several other factors. We share our methodology clearly. Book a call and we will walk you through a preliminary range within 2 weeks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM SECTION */}
      <section id="contact-section" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-card z-0" />
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <LeadForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { leadSchema, type LeadInput } from "@/lib/leadSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LeadForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showMoreFields, setShowMoreFields] = useState(false);

  const form = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      businessType: "",
      annualRevenue: "",
      explorationIntent: "",
      description: "",
      consent: false as unknown as true,
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
    },
  });

  // Capture UTM parameters from the URL on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get("utm_source") || "";
    const utm_medium = params.get("utm_medium") || "";
    const utm_campaign = params.get("utm_campaign") || "";
    if (utm_source) form.setValue("utm_source", utm_source);
    if (utm_medium) form.setValue("utm_medium", utm_medium);
    if (utm_campaign) form.setValue("utm_campaign", utm_campaign);
  }, [form]);

  const onSubmit = async (data: LeadInput) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Track form submission attempt
      track("lead_form_submit", {
        intent: data.explorationIntent,
        hasPhone: !!data.phone,
        expanded: showMoreFields,
      });

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.error || "Submission failed");
      }

      track("lead_form_success");
      sessionStorage.setItem("pyrite_lead_submitted", "true");
      router.push("/thank-you");
    } catch (err) {
      track("lead_form_error", {
        message: err instanceof Error ? err.message : "unknown",
      });
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg border border-border">
      <h3 className="font-serif text-2xl font-semibold mb-2 text-secondary">
        Start a Confidential Conversation
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Just three quick fields to start. We&apos;ll only ask for more if you want to share.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* CORE 3 FIELDS — always visible */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} className="bg-card/50" autoComplete="name" autoCapitalize="words" aria-required="true" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} className="bg-card/50" autoComplete="email" aria-required="true" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="explorationIntent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What are you exploring? *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-card/50" aria-required="true">
                      <SelectValue placeholder="Select intent" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Full exit">Full exit</SelectItem>
                    <SelectItem value="Partial sale">Partial sale</SelectItem>
                    <SelectItem value="Growth capital">Growth capital</SelectItem>
                    <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PROGRESSIVE DISCLOSURE — optional fields */}
          {!showMoreFields && (
            <button
              type="button"
              onClick={() => {
                setShowMoreFields(true);
                track("lead_form_expand");
              }}
              className="text-sm text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline py-3 px-1"
              aria-expanded={showMoreFields}
            >
              + Add business details (optional)
            </button>
          )}

          {showMoreFields && (
            <div className="space-y-5 pt-2 border-t border-border">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+91 98765 43210" {...field} className="bg-card/50" autoComplete="tel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-card/50">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Wellness">Wellness</SelectItem>
                          <SelectItem value="Professional Services">Professional Services</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="annualRevenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Annual Revenue</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-card/50">
                            <SelectValue placeholder="Select revenue range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="<₹5Cr">&lt; ₹5Cr</SelectItem>
                          <SelectItem value="₹5Cr–₹25Cr">₹5Cr – ₹25Cr</SelectItem>
                          <SelectItem value="₹25Cr–₹100Cr">₹25Cr – ₹100Cr</SelectItem>
                          <SelectItem value=">₹100Cr">&gt; ₹100Cr</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about your business</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Briefly describe what your business does and your goals..."
                        className="min-h-[100px] resize-y bg-card/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* CONSENT CHECKBOX — DPDP Act compliant */}
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start gap-3 pt-2">
                <FormControl>
                  <Checkbox
                    checked={field.value as unknown as boolean}
                    onCheckedChange={field.onChange}
                    className="mt-1"
                    aria-required="true"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal text-muted-foreground cursor-pointer">
                    I agree to be contacted about my inquiry and have read the{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline" target="_blank">
                      Privacy Policy
                    </Link>
                    . *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {submitError && (
            <p className="text-sm text-red-600 text-center" role="alert">
              {submitError}
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            data-event="lead-form-submit"
          >
            {isSubmitting ? "Submitting…" : "Submit Confidential Inquiry"}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Your information is 100% confidential and never shared without your consent.
          </p>
        </form>
      </Form>
    </div>
  );
}

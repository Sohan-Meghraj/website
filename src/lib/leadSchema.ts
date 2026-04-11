import * as z from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Valid email is required").max(200),
  explorationIntent: z.string().min(1, "Please tell us what you're exploring").max(80),
  // Optional fields below — only required if the user expands the form
  phone: z.string().max(40).optional().or(z.literal("")),
  businessType: z.string().max(80).optional().or(z.literal("")),
  annualRevenue: z.string().max(80).optional().or(z.literal("")),
  description: z.string().max(2000).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy policy" }),
  }),
  // UTM tracking — captured automatically, never user-entered
  utm_source: z.string().max(120).optional(),
  utm_medium: z.string().max(120).optional(),
  utm_campaign: z.string().max(120).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

import * as z from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Valid email is required").max(200),
  phone: z.string().max(40).optional().or(z.literal("")),
  businessType: z.string().min(1, "Please select a business type").max(80),
  annualRevenue: z.string().min(1, "Please select an annual revenue range").max(80),
  explorationIntent: z.string().min(1, "Please tell us what you're exploring").max(80),
  description: z.string().max(2000).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

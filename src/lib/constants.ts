export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/pyriteventures";

export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || "";

export const openCalendly = () =>
  window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");

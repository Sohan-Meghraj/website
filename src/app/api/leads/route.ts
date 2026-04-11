import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/leadSchema";

// In-memory rate limiter: max 5 submissions per IP per 10 minutes.
// For multi-instance deployments, swap this for Upstash/Redis.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const bucket = buckets.get(ip);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { ok: true };
}

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const limit = rateLimit(ip);

    if (!limit.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(limit.retryAfter ?? 60) },
        },
      );
    }

    const body = await req.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const lead = parsed.data;

    // Server-side log (not exposed to browser)
    console.log("[lead] received", {
      email: lead.email,
      businessType: lead.businessType,
      annualRevenue: lead.annualRevenue,
      explorationIntent: lead.explorationIntent,
      receivedAt: new Date().toISOString(),
    });

    // Optional: forward to a webhook (Slack, Discord, Resend, n8n, etc.)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
        });
      } catch (err) {
        // Don't fail the user submission if the webhook is down
        console.error("[lead] webhook delivery failed", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] unexpected error", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

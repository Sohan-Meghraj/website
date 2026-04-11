import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pyrite Ventures — Acquiring service businesses in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1A1A2E 0%, #2A2A4A 50%, #1A1A2E 100%)",
          color: "white",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#B8860B",
              color: "#1A1A2E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            PV
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#B8860B" }}>
            Pyrite Ventures
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          We Acquire and Grow Service Companies in India
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            marginTop: 32,
          }}
        >
          Founder-first · Long-term ownership · 100% confidential
        </div>
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            fontSize: 16,
            padding: "8px 16px",
            border: "2px solid #B8860B",
            color: "#B8860B",
            borderRadius: 6,
            letterSpacing: 2,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          PROTOTYPE
        </div>
      </div>
    ),
    { ...size },
  );
}

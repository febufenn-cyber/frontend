import { ImageResponse } from "next/og";

export const alt = "Pet Marketplace — Find your companion. India's verified pet marketplace.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The WhatsApp link preview — designed in the site's exact art direction.
export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(120% 90% at 80% 0%, rgba(242,165,33,0.22), rgba(18,24,15,0) 55%), linear-gradient(135deg, #1b2316 0%, #12180f 55%, #0c1009 100%)",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#f2a521" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 8c-3.2 0-4.2 4.6-1.4 6.3 2.6 1.6 6-.8 6.4-3.9.4 3.1 3.8 5.5 6.4 3.9C21.2 12.6 20.2 8 17 8c-2.7 0-4 2.6-5 5.4C11 10.6 9.7 8 7 8Z" />
          </svg>
          <div style={{ fontSize: 38, color: "#f3ecdd", fontWeight: 600, letterSpacing: -1 }}>Pet Marketplace</div>
          <div style={{ marginLeft: 8, fontSize: 20, color: "#c89a4e", fontFamily: "monospace", letterSpacing: 4, textTransform: "uppercase" }}>
            Est. 2026 · India
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
          <div style={{ display: "flex", fontSize: 80, color: "#f3ecdd", fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Find the companion who&apos;s
          </div>
          <div style={{ display: "flex", fontSize: 80, color: "#f2a521", fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            been looking for you.
          </div>
          <div style={{ marginTop: 28, fontSize: 27, color: "#b6b09f", fontFamily: "Helvetica, sans-serif" }}>
            India&apos;s verified pet marketplace — papers, vaccinations and ratings, all in the open.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {["Verified sellers", "Vaccination records", "KCI certified"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#8fb59b",
                border: "1px solid #2a3022",
                borderRadius: 999,
                padding: "10px 22px",
                fontFamily: "Helvetica, sans-serif",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}

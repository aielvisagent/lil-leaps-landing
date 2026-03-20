import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "lil leaps — baby growth timelapse app";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #F0F7F4 0%, #FFFFFF 50%, #FFF5F5 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontSize: "48px",
            }}
          >
            👶
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              color: "#2D3B4E",
              letterSpacing: "-1px",
            }}
          >
            lil leaps
          </div>
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: 800,
            color: "#2D3B4E",
            textAlign: "center",
            lineHeight: 1.3,
            maxWidth: "800px",
            marginBottom: "20px",
          }}
        >
          One clip a week.
          <br />A lifetime of memories.
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#6B7A8D",
            textAlign: "center",
            maxWidth: "650px",
            lineHeight: 1.5,
            marginBottom: "36px",
          }}
        >
          Record a 5-second video of your baby once a week. Watch them grow into
          a beautiful timelapse.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#F2706D",
            color: "white",
            padding: "16px 36px",
            borderRadius: "14px",
            fontSize: "22px",
            fontWeight: 800,
          }}
        >
           Download for iOS
        </div>
      </div>
    ),
    { ...size }
  );
}

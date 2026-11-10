import { ImageResponse } from "next/og";

// Home-screen icon for iOS: the same trail-and-summit mark as app/icon.svg.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#262320",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 32 32" fill="none">
          <path
            d="M6 24 L13 14 L17.5 18.5 L24.5 8.5"
            stroke="#F0EEE6"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24.5" cy="8.5" r="3" fill="#D97757" />
        </svg>
      </div>
    ),
    size,
  );
}

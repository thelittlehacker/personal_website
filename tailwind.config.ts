import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        body:    ["var(--font-body)",    "DM Sans",           "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)",    "JetBrains Mono",    "monospace"],
      },
      colors: {
        brand: {
          bg:         "#FAF7F0",
          surface:    "#FFFCF7",
          ink:        "#171717",
          muted:      "#5F5F5F",
          accent:     "#2F6F68",
          accentSoft: "#EEF5F4",
          copper:     "#B46A3C",
          border:     "#E8E0D4",
          highlight:  "#EFE7D8",
        },
      },
      boxShadow: {
        card:  "0 4px 18px rgba(23, 23, 23, 0.06)",
        hover: "0 8px 28px rgba(47, 111, 104, 0.12)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;

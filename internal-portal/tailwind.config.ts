import type { Config } from "tailwindcss";

// Airbnb-inspired palette
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Airbnb tokens
        rausch: "#ff385c",
        "rausch-active": "#e00b41",
        "rausch-soft": "#ffd1da",
        "rausch-text": "#c13515",
        luxe: "#460479",
        plus: "#92174d",
        ink: "#222222",
        body: "#3f3f3f",
        muted: "#6a6a6a",
        "muted-soft": "#929292",
        hairline: "#dddddd",
        "hairline-soft": "#ebebeb",
        "border-strong": "#c1c1c1",
        canvas: "#ffffff",
        "surface-soft": "#f7f7f7",
        "surface-strong": "#f2f2f2",
        bone: "#ffffff",
        paper: "#ffffff",
        // Aliases — map legacy tokens used in pages/components to Airbnb palette
        "ink-soft": "#3f3f3f",
        smoke: "#3f3f3f",
        gray: "#6a6a6a",
        "gray-soft": "#929292",
        ash: "#ebebeb",
        "ash-strong": "#dddddd",
        emerald: "#ff385c",
        "emerald-soft": "#e00b41",
        "emerald-deep": "#c13515",
        copper: "#ff385c",
        moss: "#008a05",
        parchment: "#f7f7f7",
        ember: "#ffd1da",
        mist: "#929292",
        cream: "#f7f7f7",
        champagne: "#ff385c",
        "champagne-soft": "#ffd1da",
        oxblood: "#c13515",
        warning: "#bf8f00",
        "wise-green": "#ff385c",
        "wise-green-hover": "#e00b41",
        "wise-mint": "#fff5f7",
        "wise-deep": "#c13515",
        "wise-positive": "#008a05",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        editorial: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jakarta)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        wisetight: "-0.014em",
      },
      borderRadius: {
        wise: "14px",
        "wise-lg": "20px",
        pill: "9999px",
      },
      boxShadow: {
        ring: "rgba(0,0,0,0.08) 0 0 0 1px",
        "ring-soft": "rgba(0,0,0,0.06) 0 0 0 1px",
        elev: "rgba(0,0,0,0.08) 0 6px 16px",
        "elev-lg": "rgba(0,0,0,0.12) 0 8px 28px",
        emerald: "rgba(255,56,92,0.18) 0 0 0 1px",
        "ring-green": "rgba(255,56,92,0.45) 0 0 0 3px",
      },
    },
  },
  plugins: [],
};

export default config;

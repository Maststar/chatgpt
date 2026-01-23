import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: "#0b0b0d",
        ivory: "#f5efe6",
        champagne: "#d6b97c",
        accent: "#b08950",
        ember: "#e2c48a"
      },
      boxShadow: {
        glow: "0 0 40px rgba(214, 185, 124, 0.25)",
        soft: "0 20px 60px rgba(0,0,0,0.35)"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "luxury-gradient": "radial-gradient(circle at top, rgba(214,185,124,0.2), transparent 55%), linear-gradient(135deg, #0b0b0d 0%, #101013 45%, #1a1612 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

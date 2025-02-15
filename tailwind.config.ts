
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6B46C1",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#4A5568",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#48BB78",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F7FAFC",
          foreground: "#4A5568",
        },
        accent: {
          DEFAULT: "#805AD5",
          foreground: "#FFFFFF",
        },
      },
      boxShadow: {
        subtle: "0 2px 15px rgba(0, 0, 0, 0.05)",
        medium: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

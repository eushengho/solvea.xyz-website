
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
          DEFAULT: "#25CAFE",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#fe5925",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#ededed",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#25CAFE",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        subtle: "0 2px 15px rgba(0, 0, 0, 0.05)",
        medium: "0 4px 20px rgba(0, 0, 0, 0.08)",
        rainbow: "0 0 20px rgba(254, 89, 37, 0.15), 0 0 20px rgba(93, 254, 37, 0.15), 0 0 20px rgba(37, 202, 254, 0.15), 0 0 20px rgba(197, 37, 254, 0.15)",
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

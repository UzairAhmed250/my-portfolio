import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        // Previous custom colors (keeping for compatibility)
        "space-blue": "#22223B",
        "electric-cyan": "#9A8C98",
        "light-slate": "#F2E9E4",
        slate: "#C9ADA7",
        "deep-purple": "#22223B",
        "purple-navy": "#4A4E69",
        mauve: "#9A8C98",
        "pale-dogwood": "#C9ADA7",
        seashell: "#F2E9E4",
        // Pine color palette - Updated for opacity support
        pine: {
          "50": "#e5efee",
          "100": "#c9dddb",
          "200": "#a9c9c5",
          "300": "#50928a",
          "400": "#007a6d",
          "500": "#004a42",
          "600": "#003d36",
          "700": "#002a25",
          "800": "#01201d",
          "900": "#011816",
        },
        // Sun color palette - Updated for opacity support
        sun: {
          "50": "#fff2d0",
          "100": "#ffe6ac",
          "200": "#fddb8a",
          "300": "#face68",
          "400": "#f6c148",
          "500": "#f0b429",
          "600": "#d59a21",
          "700": "#b9801a",
          "800": "#9d6713",
          "900": "#7f500e",
        },
        // On colors for text
        "on-dark": {
          DEFAULT: "rgba(235, 255, 255, 0.85)",
          low: "rgba(235, 255, 255, 0.65)",
          high: "#ebffff",
        },
        "on-light": {
          DEFAULT: "rgba(1, 32, 29, 0.85)",
          low: "rgba(1, 32, 29, 0.7)",
          high: "#01201d",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        fira: ["var(--font-fira)", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(80, 146, 138, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(80, 146, 138, 0.8)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-right": "fade-in-right 0.7s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-mesh":
          "radial-gradient(at 40% 20%, rgba(80, 146, 138, 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(80, 146, 138, 0.05) 0px, transparent 50%), radial-gradient(at 20% 70%, rgba(80, 146, 138, 0.15) 0px, transparent 50%)",
        "tech-pattern":
          'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2350928a\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;


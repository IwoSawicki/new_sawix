/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        kaneda: ["kaneda-gothic", "sans-serif"],
        IvyPresto: ["ivypresto-headline", "serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        marqueeVertical: "marqueeVertical 25s linear infinite",
        marqueeVertical2: "marqueeVertical2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marqueeVertical: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marqueeVertical2: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

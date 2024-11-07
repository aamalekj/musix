import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: { 
      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Outfit: ['Outfit', 'sans-serif'],
        Playfair: ['Playfair', 'sans-serif'],
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
      },
      animation: {
        gradient: "gradient linear 6s infinite"
      },
    },
  },
};
export default config;

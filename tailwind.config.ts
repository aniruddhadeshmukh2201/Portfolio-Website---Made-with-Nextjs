import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Ensures dark mode works with class-based switching
  theme: {
    extend: {
      colors: {
        primary: "rgba(10, 10, 10, .99)",
        secondary: "#222222",
        white: "#ffffff",
        tertiary: "#666666",
      },
    },
  },
  plugins: [],
};
export default config;

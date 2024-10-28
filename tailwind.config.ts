import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        project: {
          "light-blue": "#BAE6FD",
          blue: "#0369A1",
          title: "#0F172A",
          purple: "#581C87",
          "purple-light": "#7E22CE",
          "yellow": "#FCD34D",
          "light-gray": "#475569",
          "orange": "#D97706",
        }
      },
    },
  },
  plugins: [],
};
export default config;

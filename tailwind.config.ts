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
        header: "#A29875",
        heading: "#FFFFFF",
        button: "#A29875",
        heading2: "#000000",
        select: "#0000009E",


      },
    },
  },
  plugins: [],
};
export default config;

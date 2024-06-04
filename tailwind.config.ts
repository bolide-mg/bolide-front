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
        primary: "#004E98",
        secondary: "#3A6EA5",
        light: "#F6F4F3",
        dark: "#0F111A",
        grey: "#C0C0C0",
        warning: "#FDA121",
        success: "#63C132",
        error: "#ED2B33",
        opacity: {
          grey: "rgba(192,192,192,0.35)",
          base: "rgba(235,235,235,0.61)",
          dark: "rgba(15,17,26,0.76)",
        },
        text: {
          base: "rgb(0,0,0)",
          hover: "rgb(66,77,78)",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        display: 'bold'
      }
    },
  },
  plugins: [],
};
export default config;

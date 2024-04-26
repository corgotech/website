import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi Variable", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display Variable", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        blue: {
          50: "#f0fafb",
          100: "#d9f2f4",
          200: "#b7e4ea",
          300: "#85d0db",
          400: "#4cb2c4",
          500: "#3196a9",
          600: "#2b798f",
          700: "#296475",
          800: "#295361",
          900: "#264653",
          950: "#142d38",
        },
        yellow: {
          50: "#fdf9ed",
          100: "#f8edcd",
          200: "#f0d997",
          300: "#e9c46a",
          400: "#e2ab3d",
          500: "#da8d26",
          600: "#c16c1e",
          700: "#a04f1d",
          800: "#833e1d",
          900: "#6c331b",
          950: "#3d190b",
        },
      },
    },
  },
  plugins: [daisyui],
};

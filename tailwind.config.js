/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5C62EC",
        white: {
          DEFAULT: "#FFFFFF",
          100: "FAFAFA",
        },
        dark: "#171718",
      },
    },
  },
  plugins: [],
};

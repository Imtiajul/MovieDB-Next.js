/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
        colors: {
          primary: '#00D991',
          dark: "#171923",
          light: "#fff",
          body: "#1D1E28",
        },
        container: {
          center: true,
          padding: {
            DEFAULT: "1.25rem",
          }
        },
      },
  plugins: [],
  }
}
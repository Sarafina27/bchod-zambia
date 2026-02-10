/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#64276c",
        secondary: "#0b6e6c",
        accent: "#61ce70",
        brandBlack: "#0b0b0b",
        brandGray: "#1f1f1f",
        light: "#f5f7fb"
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}
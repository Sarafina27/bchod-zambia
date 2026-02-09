

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"   // include all JS/TS/JSX/TSX files
  ],
  theme: {
    extend: { 
      colors: {
        primary: "#64276c",       // purple
        secondary: "#0b6e6c",     // teal
        text: "#232222",          // dark gray
        accent: "#61ce70",        // green
        transparentBlack: "#02010100",
      },
    },
  },
  plugins: [],
}

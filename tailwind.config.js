/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '340px',
      'sm': '600px',
      'md': '900px',
      'lg': '1200px',
      'xl': '1536px',},
    extend: {
      colors: {
        baseColor: '#282C34',
      },
    },
  },
  plugins: [require("daisyui")],
}

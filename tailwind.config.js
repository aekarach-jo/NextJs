/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
        "dark-purple" : "#081A51",
        "light-white" : "rgba(255,255,255,0.17)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
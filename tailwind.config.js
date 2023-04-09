const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['var(--font-saira)',fontFamily.sans],
        serif:['var(--font-anton)',fontFamily.serif],
      },
      colors:{
        peach:"#DEB6AB",
        matcha:"#C8DBBE",
        beige:"#F8ECD1",
        darkbeige:"#A9907E",
        darkpeach:"#A7727D",
        darkmatcha:"#698269",
        default:"#F8ECD1"
      }
    },
  },
  plugins: [],
  darkMode:'class'
}

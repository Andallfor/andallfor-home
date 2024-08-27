/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,ts}", "./docs/*.html", "./docs/build/*.js"],
  theme: {
    extend: {
      colors: {
        // https://lospec.com/palette-list/aap-64
        'black-main': '#060608',
        'pink-main': '#793a80',
        'red-main': '#73172d',
        'blue-main': '#143464'
      }
    },
  },
  plugins: [],
}


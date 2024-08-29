/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/index.html", "docs/src/{*.tsx,*.css}"],
  theme: {
    extend: {
      colors: {
        // https://lospec.com/palette-list/aap-64
        'black-main': '#060608',
        'purple-main': '#793a80',
        'red-main': '#73172d',
        'blue-main': '#143464',
        'off-white': '#dae0ea',
        'purple-light': '#bc4a9b',
        'red-light': '#b4202a',
        'red-bright': '#df3e23',
      }
    },
  },
  plugins: [],
}

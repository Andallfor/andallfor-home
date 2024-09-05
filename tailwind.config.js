/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/index.html", "docs/src/{*.tsx,*.css}", "docs/src/descriptions{*.tsx,*.css}"],
  theme: {
    extend: {
      colors: {
        // https://lospec.com/palette-list/aap-64
        'black-main': '#060608',
        'purple-main': '#793a80',
        'red-main': '#b4202a',
        'blue-main': '#143464',
        'off-white': '#dae0ea',
        'purple-light': '#bc4a9b',
        'purple-bright': '#e86a73',
        'red-light': '#df3e23',
        'red-bright': '#fa6a0a',
        'blue-light': '#249fde',
        'blue-bright': '#20d6c7',
        'gray-main': '#e3e6ff',
        'black-light': '#e3e6ff',
      },
      animation: {
        'pulse-main': 'pulse-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'appear': 'appear 300ms cubic-bezier(0.4, 0, 0.6, 1) forwards',
        'appear-delay': 'appear 300ms 150ms cubic-bezier(0.4, 0, 0.6, 1) forwards'
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 }
        },
        'appear': {
          '100%': { transform: 'translateX(0px)', opacity: 1 }
        }
      },
      screens: {
        'xs': '480px'
      },
      fontSize: {
        '2xs': '0.625rem',
      }
    },
  },
  plugins: [],
}

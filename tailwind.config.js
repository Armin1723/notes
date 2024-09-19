/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      wickedMouse: ['Wicked Mouse', 'sans-serif'],
    },
    extend: {
      colors: {
        'neon-green' : '#69cca4',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem'
      },
      colors: {
        default: '#494d49',
        darkGray: '#494d49',
        lightGray: '#eeeef0'
      }
    },
  },
  plugins: [],
}


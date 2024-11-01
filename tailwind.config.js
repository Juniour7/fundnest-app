/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sen: ['Sen', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif']
      },
      fontSmoothing: {
        antialiased: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
      },
    },
  },
  plugins: [],
}


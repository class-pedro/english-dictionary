/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        spinner: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut .3s ease-in-out',
        spinner: 'spinner 0.75s linear infinite',
      },
    },
  },
  plugins: [],
}
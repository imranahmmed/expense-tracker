/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'graph-pattern': "url('./src/assets/images/03.png')",
        'graph-pattern2': "url('./src/assets/images/04.png')",
      }
    },
  },
  plugins: [],
}
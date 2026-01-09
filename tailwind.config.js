/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        gold: '#B89F7A',
        beige: '#F7F2ED',
      },
      
    },
  },
  plugins: [],
}
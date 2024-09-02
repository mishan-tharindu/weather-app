/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',       // Capture all files in the app directory
    './componets/**/*.{js,jsx,ts,tsx}', // Include the components directory
    './pages/**/*.{js,jsx,ts,tsx}',      // Include the pages directory if it exists
    './styles/**/*.{css}',               // Include any custom CSS files in the styles directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/hero-image.jpg')",
        "cool-touch": "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
      }
    },
  },
  plugins: [],
}
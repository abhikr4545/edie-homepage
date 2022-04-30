module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "Poppins, sans-serif",
        'heebo': "Heebo, sans-serif"
      }
    },
    container: {
      padding: "1rem",
      center: "true",
      screens: {
        "xl": "1440px",
        "2xl": "1440px"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
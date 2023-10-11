/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-blue': 'rgba(0, 0, 0, 0.8)', // Sesuaikan nilai alpha untuk nuansa yang diinginkan
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1E2323',
        'primary-light': '#F2F2F2',
        'primary-pink': '#F03782',

        'secondary-dark': '#090B0B',
        'secondary-light': '#E3E4E4',
        'secondary-red': '#BE0046',
        'secondary-orange': '#EB5000',
        'secondary-yellow': '#FFE600',
        'secondary-blue': '#198CE6',
        'secondary-purple': '#4D2F9E'
      }
    },
  },
  plugins: [],
  important: true,
}
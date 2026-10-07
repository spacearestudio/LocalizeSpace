/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#9ae7fc',
          green: '#8cffd1',
        },
      },
    },
  },
  plugins: [],
};

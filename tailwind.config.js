/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.7' },
        }
      },
      animation: {
        'blink': 'blink 1s infinite',
      }
    },
  },
  plugins: [],
};

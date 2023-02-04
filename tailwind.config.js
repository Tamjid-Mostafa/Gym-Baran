/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#6765F0",
        "secondary": "#264373",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
    },
  },
  plugins: [],
};

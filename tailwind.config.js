/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#CA8A03',
          'light-hover': '#EAB305',
          dark: '#FACC14',
          'dark-active': '#CA8A03',
        },
        background: {
          dark: '#09090B',
          'dark-navbar': '#18181B',
        },
      },
    },
  },
  plugins: [],
};


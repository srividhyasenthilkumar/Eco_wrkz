/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // for Next.js 13+ with /app
    "./pages/**/*.{js,ts,jsx,tsx}", // if you use /pages
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primaryBlue: "var(--primary-blue)",
      },
    },
  },
  plugins: [],
};


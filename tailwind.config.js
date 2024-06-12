/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-lg": { max: "1024px" },
      },
    },
  },
  plugins: [],
};

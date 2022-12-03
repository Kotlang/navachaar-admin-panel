/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/index.html", "./src/**/*.{jsx,tsx,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

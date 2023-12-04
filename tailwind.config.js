/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        "btn_shadow": "0px 10px 32px 0px #CC33d9",
        "icon_shadow": "0px 10px 32px 0px #ffffff"
      }
    },
  },
  plugins: [],
}


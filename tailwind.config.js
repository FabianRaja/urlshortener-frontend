/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'list': '390px',
      "dashboard":"828px",
      "login":"390px"
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:["night","aqua"]
  }
}
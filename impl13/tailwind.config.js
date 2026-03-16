/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        blue:{
          innerColor: "#334664",
          700 : "#03294c"
        },
        green : {
          400:"#758b9f"
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontFamily:{
        title :['Lobster', 'cursive'],
        subTitle:['Lobster Two', 'cursive']
      },
      colors:{
        darkPrimary:"#15111f ",
        card:"#292d46",
      }
    },
  },
  plugins: [],
}

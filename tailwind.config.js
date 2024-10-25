/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        textColor: '#2f3e46',
        accentColor: '#84a98c',
        secondaryColor: '#52796f',
        primaryColor: '#354f52',
        backgroundColor: '#cad2c5',
      },
      screens: {
        'xs': '420px',
      },
    },
  },
  plugins: [],
}


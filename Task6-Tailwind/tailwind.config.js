/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        desaturated_red: 'hsl(0, 36%, 70%)',
        soft_red: 'hsl(0, 93%, 68%)',
        dark_grayish_red: 'hsl(0, 6%, 24%)'
      }
    },
    screens:{
      'lar': '600px',
      'dt': '1025px'
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'my-grey':{
          '100': '#9a9a9a',
          '200': '#dcdcdc',
          '300': '#c4c4c4'
        },
        'light-grey': 'rgb(212, 212, 212)',
        'tech-color': '#404040',
        'main': '#111111',
        'mac-inner': '#1f2123',
        'mac-outer': '#303134'
      },
      boxShadow:{
        'mac-shadow': '0 .1rem 0.5rem rgba(72, 182, 255, 0.5)'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'figma-stroke': 'url(/src/assets/stroke-figma.png)'
      },
      colors:{
        'light-grey': 'rgb(212, 212, 212)',
        'tech-color': '#404040',
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
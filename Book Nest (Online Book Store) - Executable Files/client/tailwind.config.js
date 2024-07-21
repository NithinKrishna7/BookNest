/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors:{
      logcolor: '#E2C799',
      goldcolor: '#d97706',
      backcolor: '#FBF8DD',
      bannercolor:'#F2ECBE',
      logotextcolor:'#9A3B3B',
      spancolor:'#C08261'
    },
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        beba: ["Bebas Neue", "sans-serif"],
        belanosima: ["Belanosima", "sans-serif"],
        geologica: ["Geologica", "sans-serif"],
        hamone: ["Hammersmith One", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        rem: ["REM", "sans-serif"],
        lexend:["Lexend","sans-serif"]
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}


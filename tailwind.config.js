/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    
    extend: {
      // Colors used in the project
      colors: {
        primary: "#DAF7A6",
        background: "#DAF7A6",
        cardbg: "#DAF7A6",
        white:'#FBFBFB',

        navbg:'#DAF7A6 ',

        overlayBg: 'rgba(0,0,0,70)',
      }
    },
  },
  plugins: [],
}


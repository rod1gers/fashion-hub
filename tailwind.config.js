/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        dark_gray: '#212224',
      },
      screens: {
        'xs': '300px',
        '1.3xs': '400px',
        '1.6xs': '500px',
        'sm': '640px',
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-30%)" }
        }
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      }
      
    },
  },
  plugins: [],
}


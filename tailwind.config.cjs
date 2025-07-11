/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000100",
        secondary: "#fae95e",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimYellow: "#9f994a",
        header: "#000000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ['Roboto Condensed', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        courier: ['Courier New', 'monospace']
      },
      keyframes:{
        fadeInLeft:{
          'from':{opacity: '0', transform: 'translateX(-200px)'},
          'to':{opacity: '1'}
        },
        fadeInRight:{
          'from':{opacity: '0', transform: 'translateX(200px)'},
          'to':{opacity: '1'}
        },
        fadeInUp:{
          'from':{opacity: '0', transform: 'translateY(-200px)'},
          'to':{opacity: '1'}
        },
        fadeInDown:{
          'from':{opacity: '0', transform: 'translateY(200px)'},
          'to':{opacity: '1'}
        },
        fadeOut:{
          'from':{opacity: '1'},
          'to':{opacity: '0'}
        },
        zoomIn:{
          '0%': {transform:'scale(0.5,0.5)'},
          '100%':{transform:'scale(1,1)'}
        },
        zoomOut:{
          '0%': {transform:'scale(0,0)'},
          '100%':{transform:'scale(1,1)'}
        },
        blink:{
          '0%, 100%' : {opacity: 1},
          '50%' : {opacity: 0}
        }
      }
    },
    animation:{
      blink: 'blink 1s step-end infinite'
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
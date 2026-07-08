

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
            backgroundImage: {
        greenlite: "linear-gradient(90deg, #FF5900 0%, #FFBB01 100%)",
      },
      colors: {
        greenlitecolor: "#C4A94F", 
        customcolor: "#222222", 
        footrcolor:"#FFFBEF",
      },
      fontFamily: {
        custom: ['Poppins', 'Poppins'],
        // HelveticaNeuefont: ['HelveticaNeuefont', 'Helvetica Neue'],
      },
      backgroundColor: {
        greenlitebg: "#222222", 
        btnbg: "#000000", 
        checkbg:"#1D8800",
        hedbg: "#FFFFFF", 
        bodybg:"#FFFFFF",
      },
      borderColor: {
        greenliteboder: "#1D8800", 
        greendarkboder: "#0D3B1B66", 
      },
      screens: {
        xs: "450px", 
      }
    },
  },
  plugins: [],
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#272262",
        sec: "#3DB0FF",
        accent: "#282C4099",
        tert: "#82869A",
        checkboxBg: "#EBEBEB"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      textShadow: {
        textShadow: "0px 32px 84px rgba(29, 41, 63, 0.06)"
      },
      background: {
        linearGradient: "linear-gradient(0deg, rgba(39, 34, 98, 0.2), rgba(39, 34, 98, 0.2))"
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      screens: {
        xs: "475px",
        // => @media (min-width: 475px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
}




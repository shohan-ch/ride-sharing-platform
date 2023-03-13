/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'

  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1366px",
      // => @media (min-width: 1366px) { ... }

      "3xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "4xl": "1750px",
      // => @media (min-width: 1750px) { ... }
    },
    extend: {
      fontFamily: {
        circularStd: "circular-std",
      },
      screens: {
        "2xs": { min: "320px", max: "479px" },
        // => @media (min-width: 375px) { ... }

        // xs: "480px",
        // => @media (min-width: 425px) { ... }
      },
      colors: {
        "bg-color": "#FFFEFD",
        "dark-bg": "#202028",
        "dark-2": "#2C2C35",
        black: "#1A1A1A",
        "gray-light": "#5C5C5C",
        "gray-1": "#F8F8F8",
        "gray-2": "#E6E6E6",
        "gray-3": "#F0F0F0",
        primary: "#4A3DA9",
        "primary-500": "#29225E",
        "primary-hover": "#484275",
        "dark-stroke": "#48535C",
        stroke: "#EDEDED",
        "dark-shape": "#384047",
      },
      padding: {
        "38px": "38px",
      },
      fontSize: {
        20: "20px",
        22: "22px",
        26: "26px",
        32: "32px",

      },
    },
  },
  plugins: [],
}

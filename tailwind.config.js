/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      grayEspuma: "#343436",
      grayBanner: "#313131",
      whiteEspuma: "#DAE1E7",
      bluesEspuma: "#0057A5",
      skyEspuma: "#06CFF6",
      blueEspuma: "#0057A5",
      primary: "#00040f",
      secondary: "#00f6ff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      century: ["Century Gothic Paneuropean", "sans-serif"],
      nexa: ['Nexa', "sans-serif"],
      gothamBold: ['Gotham Bold', 'sans-serif'],
      gothamRegular: ["Gotham Regular", 'sans-serif'],
    },
    fontSize: {
      xl: ['26px', '32px'],
    }
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];
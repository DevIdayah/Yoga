module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./index.js"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "#C6BDBE",
        primary: "#4F282D",
        list: "rgba(79, 40, 45, 0.11)",
      },
    },
  },
  plugins: [],
};

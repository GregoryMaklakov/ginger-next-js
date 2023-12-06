/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        lightGrey: "#E0E0E0",
        darkGrey: "#474747",
        gradientFrom: "#7053ff",
        gradientTo: "#e0658c",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
        fromShadow: "inset 0px 14px 33px 9px rgba(112, 83, 255, 1)",
      },
      transitionTimingFunction: {
        "ease-OutCubic": "cubic-bezier(0.215,0.610,0.355,1.000)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
      "2xs": { max: "374px" },
      // => @media (max-width: 374px) { ... }
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies
  plugins: [],
};

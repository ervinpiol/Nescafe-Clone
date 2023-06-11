/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nescafe: ["Nescafe", "sans-serif"],
        GothamRoundedMedium: ["GothamRoundedMedium", "sans-serif"],
        GothamRoundedBook: ["GothamRoundedBook", "sans-serif"],
        Caveat: ["Caveat", "cursive"],
      },
      colors: {
        GrayBG: "#f9f9f9",
        GrayBG2: "#f0f0f0",
        SemiDarkGray: "#979797",
        DarkGray: "#222222",
        LightGray: "#9c9c9c",
        Gray: "#e8e8e8",
        Red: "#ad1008",
        LightRed: "#E1261C",
        FBColor: "#1877f2",
        Beige: "#d9c7af",
        LightBeige: "#f5f1ed",
        Gold: "#f7b500",
        CaramelLatte: "#cbac7b",
      },
      content: {
        LeafGray: "url('./assets/leaf-gray.svg')",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

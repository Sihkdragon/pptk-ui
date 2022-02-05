module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mygray: {
          1: "#41434E",
          2: "#8B8E9F",
        },
        mygreen: {
          1: "#2ED573",
          2: "#1D944E",
        },
        mybluelight: {
          1: "#1E90FF",
          2: "#007FFB",
        },
        myblue: {
          1: "#3742FA",
          2: "#525CF9",
        },
        myred: {
          1: "#FF4757",
          2: "#F8081D",
        },
      },
      fontFamily: {
        display: ["Noto\\ Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

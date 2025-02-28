module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    fontSize: {
      18: "18px",
      24: "24px",
      14: "14px",
      12: "12px",
      16: "16px",
      56: "56px",
      36: "36px",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      width: {
        620: "620px",
        500: "500px",
        450: "450px",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        enumPrimaryMain: "#095AD3",
      },
    },
  },
  plugins: [],
};

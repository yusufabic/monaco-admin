/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          darker: "#212323",
          dark: "#313535",
          light: "#f5f5f5",
        },
        body: {
          dark: "#313535",
          light: "#F4F4F4",
        },
        ff: {
          aqua: "#1EE3CE",
          // aqua: '#eb1163',
        },
      },
      borderWidth: {
        3: "3px",
      },
    },
    animation: {
      "bounce-and-stop": "bounce 1s ease-in-out 2.5",
    },
  },
  plugins: [],
};

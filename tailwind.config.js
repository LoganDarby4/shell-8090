/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js}"],
  important: false,
  plugins: [require("autoprefixer"), require("tailwindcss")],
  theme: {
    extend: {
      colors: {
        
      },
      spacing: {
      },
      fontFamily: {
      },
      borderRadius: {
      },
    },
    fontSize: {
    },
  },
  corePlugins: {
    preflight: true,
  },
};

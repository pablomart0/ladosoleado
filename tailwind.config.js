/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sun: {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffdba8",
          300: "#ffc071",
          400: "#ff9d38",
          500: "#fd7f13",
          600: "#ee6309",
          700: "#c54a09",
          800: "#9c3a10",
          900: "#7d3110",
        },
        sky: {
          50: "#eff9ff",
          100: "#dff2ff",
          500: "#0e8fc9",
          700: "#0b6a99",
          900: "#0a4a6b",
        },
        night: "#132A3E",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

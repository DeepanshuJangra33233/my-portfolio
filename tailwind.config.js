/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "card-gradient": "linear-gradient(145deg, #1e2024, #23272b)",
      },
      boxShadow: {
        "box-shadow": "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      colors: {
        primary: "#ff014f",
        secondary: "#c4cfde",
      },
    },
  },
  plugins: [],
};

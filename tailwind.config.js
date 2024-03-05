/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-bg": "#222430",
        "bg-dark": "#1b1a22",
        "secondary": "#dd163b",
        "secondary-text": "#000",
      },
      width: {
        "custom-sm": "55%",
      },
      fontSize: {
        "custom-lg": "1.875rem",
      },
      letterSpacing: {
        custom: "-0.03em",
      },

    },
  },
  plugins: [],
};

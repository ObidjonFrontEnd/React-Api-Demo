/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#17a2b8",
      },
      backgroundColor: {
        grayBg: "#343a40d2",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite", // Медленное вращение
        "fade": "fadeInOut 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}


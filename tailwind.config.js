/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Warna biru kustom
        secondary: "#10B981", // Warna hijau kustom
      },
      fontFamily: {
        custom: ["Inter", "sans-serif"], // Font kustom
      },
    },
  },
  plugins: [],
};

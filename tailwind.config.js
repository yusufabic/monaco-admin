/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Altın
        primaryBright: "#FFD700", // Daha parlak altın
        secondary: "#8C7851", // Bronz
        accent: "#C0C0C0", // Gümüş
        background: "#F5F5F5", // Açık gri
        surface: {
          DEFAULT: "#FFFFFF", // Beyaz
          light: "#F5F5F5", // Açık gri
          dark: "#333333", // Koyu gri
        },
        border: "#E0E0E0", // Gri
        textPrimary: "#333333", // Koyu gri
        textSecondary: "#666666", // Orta gri
        success: "#4CAF50", // Yeşil
        warning: "#FFC107", // Sarı
        error: "#F44336", // Kırmızı
        errorDark: "#D32F2F", // Daha koyu kırmızı
        info: "#2196F3", // Mavi
      },
    },
  },
  plugins: [],
};

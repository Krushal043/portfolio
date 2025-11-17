const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
          },
          keyframes: {
            "fade-in": {
              "0%": { opacity: "0" },
              "100%": { opacity: "1" },
            },
            "zoom-in-95": {
              "0%": { transform: "scale(0.95)" },
              "100%": { transform: "scale(1)" },
            },
          },
          animation: {
            "fade-in": "fade-in 0.2s ease-out",
            "zoom-in-95": "zoom-in-95 0.2s ease-out",
          },
        },
      },
    },
  },
};

export default config;

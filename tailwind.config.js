/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#F0F6F2",
          100: "#DCEBE2",
          200: "#BCD8C6",
          300: "#92BDA4",
          400: "#649C7D",
          500: "#437F5D",
          600: "#2E7D32",
          700: "#23612A",
          800: "#0B3D2E",
          900: "#082F24",
          950: "#041D16",
        },
        lime: {
          300: "#D6EB8A",
          400: "#C3E35A",
          500: "#A7D129",
          600: "#8FB51F",
          700: "#6F8F16",
        },
        amber: {
          50: "#FBF4E8",
          100: "#F5E6C8",
          500: "#D99A35",
          600: "#B87C25",
          700: "#8F5F1B",
        },
        ink: "#18231D",
        muted: "#65736A",
        soft: "#F5F8F5",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        display: ['"Manrope Variable"', "Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,24,40,.04), 0 12px 40px -24px rgba(11,61,46,.35)",
        lift: "0 24px 70px -34px rgba(11,61,46,.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

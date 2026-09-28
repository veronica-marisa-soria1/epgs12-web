/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ────────────────────────────────────────────────────────────
      // IDENTIDAD VISUAL — editar acá para cambiar los colores de
      // todo el sitio. Los tonos "teal", "gold" y "orange" fueron
      // extraídos directamente del isologo de la institución.
      // ────────────────────────────────────────────────────────────
      colors: {
        teal: {
          900: "#0A4A57",
          800: "#0C5A69",
          700: "#0E6E82",
          500: "#00819E",
          100: "#DCEEF1",
        },
        gold: {
          600: "#C9930B",
          500: "#F2B705",
          100: "#FDF2CC",
        },
        clay: {
          600: "#C24E12",
          500: "#E8641A",
          100: "#FCE3D3",
        },
        ink: "#17211F",
        paper: "#F6F7F5",
        "paper-alt": "#EDF1F0",
        line: "#D9DEDC",
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "system-ui", "sans-serif"],
        body: ["\"IBM Plex Sans\"", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "rise-in": "riseIn 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

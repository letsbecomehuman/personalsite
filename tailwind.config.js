module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        squgily: "url('/src/assets/divider.svg')",
        topbar:
          "linear-gradient(to right, rgb(217, 70, 239), rgb(220, 38, 38), rgb(251, 146, 60))",
      },
    },
    colors: {
      p_text: "#b1b1b1",
      head_text: "#eaeaea",
      navbar_back: "rgba(17, 17, 17, 0.8)",
      item_back: "#161616",
      item_hover_back: "#1d1d1d",
      action_back: "#242424",
      action_border: "#363636",
      border_sm: "rgba(54, 54, 54, 0.6)",
      action_text: "#d9d9d9",
      btn_back: "#2e2e2e",
      btn_text: "#f6f6f6",
      link_text_hover: "#ee6352",
      link_border_hover: "rgba(238, 99, 82, .4)",
      link_border: "#6c6c6c",
      link: "#d9d9d9",
      background: "#030303",
      selectionBack: "rgba(40,41,96)",
    },
    fontFamily: {
      logo: "Work Sans",
      theme: ["Work Sans", "Metropolis Regular", "Source Code Pro"],
      theme_bold: ["Work Sans Bold", "Metropolis Bold", "Source Code Pro"],
    },
    screens: {
      sm: { "max": "767px"},
      md: "768px",
      slg: "978px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

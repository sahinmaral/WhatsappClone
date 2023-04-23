/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "whatsapp-green": "#00A884",
        "whatsapp-gray": "#F0F2F5",
        "whatsapp-green-chat": "#D9FDD3",
        "whatsapp-green-panel": "#008069",
        "whatsapp-gray-icon": "#8696a0",
        "whatsapp-green-dark": "#111B21",
        "whatsapp-green-dark-2": "#202C33",
      },
      boxShadow: {
        "whatsapp-shadow":
          "0 2px 5px 0 rgba(11,20,26,0.26),0 2px 10px 0 rgba(11,20,26,0.16);",
      },
    },
  },
  plugins: [],
};

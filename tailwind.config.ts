import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Paleta 60/30/10 → negro 60% · verde 30% · blanco 10%
        arcoral: "#2E8B57",      // acento primario (verde mar)
        arcoraldark: "#1F6B42",
        arblack: "#0A0A0A",
        arpanel: "#111111",
        arpanel2: "#181818",
        arpanel3: "#1F1F1F",
        arborder: "#262626",
        armuted: "#8A8A8A",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

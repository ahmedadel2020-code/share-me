import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      REACT_APP_GOOGLE_API_TOKEN:
        "134649638814-ujiad4dqdt7unppikd0ij88hmfoa5i3p.apps.googleusercontent.com",
      REACT_APP_SANITY_PROJECT_ID: "7k9atpwa",
      REACT_APP_SANITY_TOKEN:
        "skQy1E91hvkG174Lk1yGzB1Ui6H2gVB826K8ufQWSc9rgHMb4Jd0OHBl8GuZjN1lQp3CBzQDM9EVpu5TV23FZc4oRkh3G5zVxXAvnmCOst8Cic0CSRHI84NScomRzfek0ORDpezx19E6O0tt8TjgAf8i3QZT5Bfa4UuXyZgRSippwxItYXUb",
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This tells Vite: whenever you see '@', look in the 'src' folder
      "@": Path.resolve(__dirname, "./src"),
    },
  },
});

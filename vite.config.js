import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/VR360_Demo_Web/",
  define: {
    process: {},
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //设置别名
    alias: {
      "@": pathSrc,
    },
  },
});

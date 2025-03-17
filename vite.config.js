import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);
  return {
    plugins: [vue()],
    base: mode === "production" ? "./" : "/",
  };
});

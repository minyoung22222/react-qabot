import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "react-qabot",
      fileName: "index",
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    emptyOutDir: true,
  },
  plugins: [react()],
});

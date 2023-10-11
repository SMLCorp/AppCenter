import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPath from "vite-tsconfig-paths";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), tsconfigPath()],
  optimizeDeps: {
    exclude: ["@SMLCorp/styled-system"],
  },
});

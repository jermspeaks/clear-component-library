import { defineConfig } from "vite";
import { resolve } from "node:path";
// import dts from "vite-plugin-dts";
import EsLint from "vite-plugin-linter";
import react from "@vitejs/plugin-react";
// import tsConfigPaths from "vite-tsconfig-paths";

import * as packageJson from "./package.json";

const { EsLinter, linterPlugin } = EsLint;

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    // tsConfigPaths(),
    linterPlugin({
      include: ["./src/**/*.{js,jsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
    // dts({
    //   include: ["src/component/"],
    // }),
  ],
  build: {
    lib: {
      entry: resolve("src", "component/index.js"),
      name: "ClearComponentsLibrary",
      formats: ["es", "umd"],
      fileName: (format) => `clear-component-library.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));

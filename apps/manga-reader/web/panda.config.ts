import { defineConfig } from "@pandacss/dev";
// import presetPanda from "@pandacss/preset-panda";
import preset from "@SMLCorp/shadow-panda/preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [preset],

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@SMLCorp/ark-ui/dist/panda.json",
    // "./node_modules/@SMLCorp/shadow-panda/dist/panda.json",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "@SMLCorp/styled-system",
  emitPackage: true,
});

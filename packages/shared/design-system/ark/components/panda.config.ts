import { defineConfig } from "@pandacss/dev";
import presetPanda from "@pandacss/preset-panda";
import preset from "@park-ui/presets";

import { button } from "./src/button/button.recipe";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [presetPanda, preset],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: { button },
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "@SMLCorp/styled-system",
  emitPackage: true,
});

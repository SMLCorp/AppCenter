module.exports = {
  "extends": [
    "../../.eslintrc.json",
    "plugin:svelte/recommended",
    "plugin:svelte/prettier",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["apps/activity-tracker-desktop/tsconfig.?*.json"],
    "extraFileExtensions": [".svelte"]
  },
  "ignorePatterns": [ "!**/*", "vite.config.ts", "vite-env.d.ts", "vitest.config.ts" ],
  "overrides": [
    {
      "files": ["*.svelte"],
      "parser": "svelte-eslint-parser",
      "parserOptions": {
        "parser": "@typescript-eslint/parser"
      }
    }
  ]
}

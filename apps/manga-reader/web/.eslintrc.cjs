module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    'plugin:@typescript-eslint/stylistic-type-checked',
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist/*", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "@typescript-eslint"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "import/no-default-export": "off",
  },
  extends: ["../../../.eslintrc.json"],
};

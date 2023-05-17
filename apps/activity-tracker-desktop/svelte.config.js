const vitePreprocess = require("@sveltejs/vite-plugin-svelte").vitePreprocess;

module.exports = {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
};

import "./app.css";

import App from "./app.svelte";

export const app = new App({
  target: document.querySelector("#app") as HTMLElement,
});

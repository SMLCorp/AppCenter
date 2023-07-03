import "./index.css";

import { RouterProvider } from "@tanstack/router";
import React from "react";
import ReactDOM from "react-dom/client";

import { router } from "./routes/rooter";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

import "./index.css";

import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";

import { router } from "./routes/router";

const clerkPubKey = import.meta.env["VITE_REACT_APP_CLERK_PUBLISHABLE_KEY"];

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <ClerkLoaded>
        <RouterProvider router={router} />
      </ClerkLoaded>
    </ClerkProvider>
  </React.StrictMode>,
);

import { Router } from "@tanstack/react-router";

import { routeTree } from "./routes";

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Create the router using your route tree
export const router = new Router({ routeTree });

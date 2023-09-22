import { lazyRouteComponent, Route, Router } from "@tanstack/react-router";

import { rootRoute } from "./root";

const browseRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "browse",
  component: lazyRouteComponent(async () => import("../pages/browse")),
});

const updatesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "updates",
  component: lazyRouteComponent(async () => import("../pages/updates")),
});

const settingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "settings",
  component: lazyRouteComponent(async () => import("../pages/settings")),
});

const libraryRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "library",
  component: lazyRouteComponent(async () => import("../pages/library")),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazyRouteComponent(async () => import("../pages/library")),
});

const extensionsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "extensions",
  component: lazyRouteComponent(async () => import("../pages/extensions")),
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => <>404 Not FOUND</>,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  libraryRoute,
  browseRoute,
  extensionsRoute,
  settingsRoute,
  updatesRoute,
  notFoundRoute,
]);

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const router = new Router({ routeTree });

export {
  browseRoute,
  extensionsRoute,
  indexRoute,
  libraryRoute,
  notFoundRoute,
  settingsRoute,
  updatesRoute,
};

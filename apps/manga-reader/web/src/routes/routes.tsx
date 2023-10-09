import { lazyRouteComponent, RootRoute, Route } from "@tanstack/react-router";

import Root from "../pages/root";

const rootRoute = new RootRoute({
  component: () => <Root />,
});

const authenticatedRoute = new Route({
  getParentRoute: () => rootRoute,
  component: lazyRouteComponent(async () => import("./authenticated")),
  id: "authenticated",
});

const browseRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "browse",
  component: lazyRouteComponent(async () => import("../pages/browse")),
});

const updatesRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "updates",
  component: lazyRouteComponent(async () => import("../pages/updates")),
});

const settingsRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "settings",
  component: lazyRouteComponent(async () => import("../pages/settings")),
});

const libraryRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "library",
  component: lazyRouteComponent(async () => import("../pages/library")),
});

const authenticatedIndexRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "/",
  component: lazyRouteComponent(async () => import("../pages/library")),
});

const historyRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "history",
  component: lazyRouteComponent(async () => import("../pages/history")),
});

const extensionsRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "extensions",
  component: lazyRouteComponent(async () => import("../pages/extensions")),
});

const publicRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "public",
});

const notFoundRoute = new Route({
  getParentRoute: () => publicRoute,
  path: "*",
  component: lazyRouteComponent(async () => import("../pages/not-found")),
});

const loginRoute = new Route({
  getParentRoute: () => publicRoute,
  path: "sign-in",
  component: lazyRouteComponent(async () => import("../pages/login")),
});

const signupRoute = new Route({
  getParentRoute: () => publicRoute,
  path: "sign-up",
  component: lazyRouteComponent(async () => import("../pages/signup")),
});

export const routeTree = rootRoute.addChildren([
  authenticatedRoute.addChildren([
    authenticatedIndexRoute,
    browseRoute,
    extensionsRoute,
    historyRoute,
    libraryRoute,
    settingsRoute,
    updatesRoute,
  ]),
  publicRoute.addChildren([loginRoute, notFoundRoute, signupRoute]),
]);

export {
  authenticatedRoute,
  browseRoute,
  extensionsRoute,
  historyRoute,
  libraryRoute,
  loginRoute,
  notFoundRoute,
  publicRoute,
  rootRoute,
  settingsRoute,
  signupRoute,
  updatesRoute,
};

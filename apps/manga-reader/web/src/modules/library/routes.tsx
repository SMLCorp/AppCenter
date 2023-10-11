import { lazyRouteComponent, Route } from "@tanstack/react-router";

import { authenticatedRoute } from "../../routes/routes";

export const libraryRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "library",
  component: lazyRouteComponent(async () => import("./library.page")),
});

export const indexRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "/",
  component: lazyRouteComponent(async () => import("./library.page")),
});

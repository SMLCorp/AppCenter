import { loginRoute, signupRoute } from "@SMLCorp/modules/authentication";
import { extensionsRoute } from "@SMLCorp/modules/extensions";
import { historyRoute } from "@SMLCorp/modules/history";
import { settingsRoute } from "@SMLCorp/modules/settings";
import { updatesRoute } from "@SMLCorp/modules/updates";
import { lazyRouteComponent, RootRoute, Route } from "@tanstack/react-router";

import { browseRoute, indexRoute, libraryRoute } from "../modules";
import Root from "../pages/root";

const rootRoute = new RootRoute({
  component: () => <Root />,
});

export const authenticatedRoute = new Route({
  getParentRoute: () => rootRoute,
  component: lazyRouteComponent(async () => import("../pages/authentication")),
  id: "authentication",
});

export const publicRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "public",
});

export const notFoundRoute = new Route({
  getParentRoute: () => publicRoute,
  path: "*",
  component: lazyRouteComponent(async () => import("../pages/not-found")),
});

export const routeTree = rootRoute.addChildren([
  authenticatedRoute.addChildren([
    browseRoute,
    extensionsRoute,
    historyRoute,
    indexRoute,
    libraryRoute,
    settingsRoute,
    updatesRoute,
  ]),
  publicRoute.addChildren([loginRoute, notFoundRoute, signupRoute]),
]);

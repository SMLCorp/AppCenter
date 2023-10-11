import { lazyRouteComponent, Route } from "@tanstack/react-router";

import { authenticatedRoute } from "../../routes/routes";

export const extensionsRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "extensions",
  component: lazyRouteComponent(async () => import("./extensions.page")),
});

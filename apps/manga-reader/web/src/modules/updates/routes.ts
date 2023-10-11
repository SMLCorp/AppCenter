import { lazyRouteComponent, Route } from "@tanstack/react-router";

import { authenticatedRoute } from "../../routes/routes";

export const updatesRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "updates",
  component: lazyRouteComponent(async () => import("./updates.page")),
});

import { lazyRouteComponent, Route } from "@tanstack/react-router";

import { authenticatedRoute } from "../../routes/routes";

export const historyRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "history",
  component: lazyRouteComponent(async () => import("./history.page")),
});

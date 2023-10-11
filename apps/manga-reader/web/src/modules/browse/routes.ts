import { lazyRouteComponent, Route } from "@tanstack/react-router";

import { authenticatedRoute } from "../../routes/routes";

export const browseRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "browse",
  component: lazyRouteComponent(async () => import("./browse.page")),
});

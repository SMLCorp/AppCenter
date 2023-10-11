import { lazyRouteComponent, Route } from "@tanstack/react-router";

import { authenticatedRoute } from "../../routes/routes";

export const settingsRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "settings",
  component: lazyRouteComponent(async () => import("./settings.page")),
});

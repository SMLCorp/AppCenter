import { lazyRouteComponent, Route } from "@tanstack/react-router";

import { publicRoute } from "../../routes/routes";

export const loginRoute = new Route({
  getParentRoute: () => publicRoute,
  path: "sign-in",
  component: lazyRouteComponent(async () => import("./login")),
});

export const signupRoute = new Route({
  getParentRoute: () => publicRoute,
  path: "sign-up",
  component: lazyRouteComponent(async () => import("./signup")),
});

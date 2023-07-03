import { Outlet, RootRoute } from "@tanstack/router";
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : React.lazy(async () =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((result) => ({
        default: result.TanStackRouterDevtools,
      })),
    );



export const rootRoute = new RootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});



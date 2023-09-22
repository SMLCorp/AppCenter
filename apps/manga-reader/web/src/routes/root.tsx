/* eslint-disable unicorn/no-null */
import { Outlet, RootRoute } from "@tanstack/react-router";
import React, { Suspense } from "react";

import { Menu } from "../components/menu";

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
      <Suspense fallback={<>Loading... </>}>
        <Outlet />
        <TanStackRouterDevtools />
      </Suspense>
      <Menu />
    </>
  ),
});

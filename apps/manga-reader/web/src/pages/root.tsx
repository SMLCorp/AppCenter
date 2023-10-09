/* eslint-disable unicorn/no-null */
import { Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : React.lazy(async () =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((module) => ({
        default: module.TanStackRouterDevtools,
      })),
    );

const Root = (): JSX.Element => (
  <Suspense fallback={<>Loading ...</>}>
    <Outlet />
    <TanStackRouterDevtools />
  </Suspense>
);

export default Root;

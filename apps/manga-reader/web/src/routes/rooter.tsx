import { Router } from "@tanstack/router";

import { rootRoute } from "./root";

const routeTree = rootRoute.addChildren([]);

export const router = new Router({ routeTree });


import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { css } from "@SMlCorp/styled-system/css";
import { Navigate, Outlet } from "@tanstack/react-router";

import { Menu } from "../components/menu";
import { loginRoute } from "./routes";

const Auth = (): JSX.Element => (
  <>
    <SignedIn>
      <main
        className={css({
          height: "90svh",
        })}
      >
        <Outlet />
      </main>
      <nav
        className={css({
          height: "10svh",
        })}
      >
        <Menu />
      </nav>
    </SignedIn>
    <SignedOut>
      <Navigate to={loginRoute.to} />
    </SignedOut>
  </>
);

export default Auth;

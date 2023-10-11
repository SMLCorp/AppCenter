import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { css } from "@SMLCorp/styled-system/css";
import { Navigate, Outlet } from "@tanstack/react-router";

import { Menu } from "../components/menu";

const Auth = (): JSX.Element => (
  <>
    <SignedIn>
      <main
        className={css({
          height: "90dvh",
        })}
      >
        <Outlet />
      </main>
      <nav
        className={css({
          height: "10dvh",
        })}
      >
        <Menu />
      </nav>
    </SignedIn>
    <SignedOut>
      <Navigate to="/sign-in" />
    </SignedOut>
  </>
);

export default Auth;

import { SignUp as Register } from "@clerk/clerk-react";
import { css } from "@SMLCorp/styled-system/css";

import { loginRoute, signupRoute } from "./routes";

const SignUp = (): JSX.Element => (
  <div
    className={css({
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    })}
  >
    <Register path={signupRoute.to} signInUrl={loginRoute.to} />
  </div>
);

export default SignUp;

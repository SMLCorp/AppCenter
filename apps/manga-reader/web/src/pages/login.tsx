import { SignIn } from "@clerk/clerk-react";
import { css } from "@SMLCorp/styled-system/css";

import { loginRoute, signupRoute } from "../routes/routes";

const Login = (): JSX.Element => (
  <div
    className={css({
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    })}
  >
    <SignIn path={loginRoute.to} signUpUrl={signupRoute.to} />
  </div>
);

export default Login;

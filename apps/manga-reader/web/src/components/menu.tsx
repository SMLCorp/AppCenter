import { Link } from "@tanstack/react-router";

import { libraryRoute } from "../routes/rooter";

export const Menu = (): JSX.Element => (
  <>
    <div>
      <ul>
        <li>
          <Link to={libraryRoute.to}>Library</Link>
        </li>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
        <li>
          <Link to="/extensions">Extensions</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/updates">Updates</Link>
        </li>
      </ul>
    </div>
  </>
);

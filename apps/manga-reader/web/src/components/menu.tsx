import { Button } from "@SMLCorp/shadow-panda";
import { css } from "@SMLCorp/styled-system/css";
import { flex } from "@SMLCorp/styled-system/patterns";
import { Link } from "@tanstack/react-router";
import {
  Album,
  BadgeAlert,
  Compass,
  History,
  MoreHorizontal,
} from "lucide-react";

import { libraryRoute } from "../routes/routes";

const MenuButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <Button
    className={css({
      backgroundColor: "background",
      color: "foreground",
      display: "flex",
      flexDirection: "column",
      gap: "0",
      height: "auto",
    })}
    asChild
  >
    {children}
  </Button>
);

export const Menu = (): JSX.Element => (
  <ul
    className={flex({
      backgroundColor: "blue.300",
      position: "sticky",
      bottom: "0",
      direction: "row",
      justify: "space-evenly",
      align: "center",
      height: "100%",
    })}
  >
    <li
      className={css({
        width: "18%",
      })}
    >
      <MenuButton>
        <Link to={libraryRoute.to}>
          <Album />
          Library
        </Link>
      </MenuButton>
    </li>
    <li
      className={css({
        width: "18%",
      })}
    >
      <MenuButton>
        <Link to="/updates">
          <BadgeAlert />
          Updates
        </Link>
      </MenuButton>
    </li>
    <li
      className={css({
        width: "18%",
      })}
    >
      <MenuButton>
        <Link to="/history">
          <History />
          History
        </Link>
      </MenuButton>
    </li>
    <li
      className={css({
        width: "18%",
      })}
    >
      <MenuButton>
        <Link to="/browse">
          <Compass />
          Browse
        </Link>
      </MenuButton>
    </li>
    <li
      className={css({
        width: "18%",
      })}
    >
      <MenuButton>
        <Link to="/settings">
          <MoreHorizontal />
          More
        </Link>
      </MenuButton>
    </li>
  </ul>
);

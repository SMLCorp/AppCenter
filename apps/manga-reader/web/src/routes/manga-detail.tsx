import { Fragment } from "react";

import { MangaInfo } from "../components/info";

export const MangaDetail = (): JSX.Element => {
  const manga: any;

  return (
    <Fragment>
      <div>
        <div className="Header">
          <div className="Left">
            <img src={manga.cover} alt="manga cover image" />
            <span>{manga.title}</span>
          </div>
          <div className="Right">
            <MangaInfo manga={manga} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

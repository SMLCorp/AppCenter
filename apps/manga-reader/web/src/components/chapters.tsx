import { Fragment } from "react";

interface IChapter {
  count: number;
  handleClick: (chapter: number) => void;
}

const Chapter = ({ count, handleClick }: IChapter): JSX.Element => (
  <Fragment>
    <div
      onClick={() => {
        handleClick(count);
      }}
    >
      <span>Chapter n° ${count}</span>
    </div>
  </Fragment>
);

export interface IChaptersListProperties {
  mangaId: string;
  total: number;
}

export const ChaptersList = ({
  mangaId,
}: IChaptersListProperties): JSX.Element => {
  const handleClick = (chapterNumber: number): void => {
    window.location.replace(`/reader/${mangaId}/chapter/${chapterNumber}`);
  };

  return (
    <Fragment>
      <div>
        <ul>
          <Chapter count={0} handleClick={handleClick} />
        </ul>
      </div>
    </Fragment>
  );
};

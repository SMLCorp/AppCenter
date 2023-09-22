import { Fragment } from "react";

export interface IChapter {
  count: number;
  handleClick: Function;
}

const Chapter = ({ count, handleClick }: IChapter): JSX.Element => <Fragment>
  <div onClick={() => handleClick(count)}>
    <span>Chapter n° ${count}</span>
  </div>
</Fragment>

export interface IChaptersListProperties {
  mangaId: string;
  total: number;
}

export const ChaptersList = ({
  mangaId,
  total,
}: IChaptersListProperties): JSX.Element => {
  const handleClick = ({ chapter }: { chapter: number }): void => {
    window.location.replace(`/reader/${mangaId}/chapter/${chapter}`);
  };

  return (
    <Fragment>
      <div>
        <ul>
          {{
            for(let count = 0; count<total; count++) {
             <Chapter count={count} handleClick={handleClick} />
          }
          }}
        </ul>
      </div>
    </Fragment>
  );
};

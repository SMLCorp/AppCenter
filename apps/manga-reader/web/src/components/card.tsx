/* eslint-disable @typescript-eslint/no-explicit-any */
const handleClick = (id: string): void => {
  window.location.replace(`/manga-detail/${id}`);
};

export interface ICardProperties {
  manga: any;
}

export const Card = ({ manga }: { manga: any }): JSX.Element => (
  <>
    <div
      onClick={() => {
        handleClick(manga.id);
      }}
    >
      <img src={manga.cover} alt="manga cover image" />
      <span>{manga.title}</span>
    </div>
  </>
);

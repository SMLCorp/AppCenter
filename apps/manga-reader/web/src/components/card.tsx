export interface ICardProperties {
  manga: any;
}

export const Card = ({ manga }): JSX.Element => {
  const handleClick = (id: string): void => {
    window.location.replace(`/manga-detail/${id}`);
  };

  return (
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
};

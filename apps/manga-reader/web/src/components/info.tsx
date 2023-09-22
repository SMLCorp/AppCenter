export interface IMangaProperties {
  manga: any;
}

export const MangaInfo = ({ manga }: IMangaProperties): JSX.Element => (
  <>
    <div>
      <ul>
        <li>
          <span>
            status: <b>${manga.status}</b>
          </span>
        </li>
        <li>
          <span>last updated: ${manga.lastUpdated}</span>
        </li>
        <li>
          <span>chapters: ${manga.chapterCount}</span>
        </li>
        <li>
          <span>source: ${manga.source}</span>
        </li>
        <li>
          <span>Description</span>
          <p>{manga.description}</p>
        </li>
      </ul>
    </div>
  </>
);

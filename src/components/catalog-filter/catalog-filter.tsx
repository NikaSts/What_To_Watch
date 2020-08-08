import * as React from 'react';
import cn from 'classnames';
import {MAX_GENRES_TO_SHOW} from '../../utils/consts';

interface CatalogFilterProps {
  genres: Array<string>;
  activeGenre: string;
  onGenreClick: (genreName: string) => void;
}

const CatalogFilter: React.FC<CatalogFilterProps> = ({
  genres, activeGenre, onGenreClick
}: CatalogFilterProps) => {
  const genresToShow: Array<string> = genres.slice(0, MAX_GENRES_TO_SHOW);

  return (
    <ul className="catalog__genres-list">
      {genresToShow.map((genreName) => {
        const isActive = genreName === activeGenre;
        const genreClass = cn({
          'catalog__genres-item': true,
          'catalog__genres-item--active': isActive,
        });
        return (
          <li
            key={genreName}
            className={genreClass}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreClick(genreName);
              }}>
              {genreName}
            </a>
          </li>
        );
      })}
    </ul>
  );
};


export default CatalogFilter;

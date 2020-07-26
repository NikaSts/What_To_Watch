import React from 'react';
import {arrayOf, string, func} from 'prop-types';
import cn from 'classnames';
import {MAX_GENRES_TO_SHOW} from '../../utils/consts';

const CatalogFilter = ({genres, activeGenre, onGenreClick}) => {
  const genresToShow = genres.slice(0, MAX_GENRES_TO_SHOW);

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

CatalogFilter.propTypes = {
  genres: arrayOf(string.isRequired).isRequired,
  activeGenre: string.isRequired,
  onGenreClick: func.isRequired,
};


export default CatalogFilter;

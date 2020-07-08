import React from 'react';
import {arrayOf, string, func} from 'prop-types';
import {MAX_GENRES_TO_SHOW} from '../../utils/consts';

const GenreList = ({genres, activeGenre, onGenreClick}) => {
  const genresToShow = genres.slice(0, MAX_GENRES_TO_SHOW);
  return (
    <ul className="catalog__genres-list">
      {genresToShow.map((genreName) => {
        const activeClass = genreName === activeGenre ? `catalog__genres-item--active` : ``;
        return (
          <li
            key={genreName}
            className={`catalog__genres-item ${activeClass}`}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={() => onGenreClick(genreName)}>
              {genreName}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

GenreList.propTypes = {
  genres: arrayOf(string.isRequired).isRequired,
  activeGenre: string.isRequired,
  onGenreClick: func.isRequired,
};

export default GenreList;

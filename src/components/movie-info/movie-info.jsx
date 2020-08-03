import React from 'react';
import {string, number, bool, func} from 'prop-types';
import {Link} from 'react-router-dom';
import history from '../../history';
import {AppRoute, Page} from '../../utils/consts';


const MovieInfo = ({
  currentPage, id, title, genre, releaseDate, isFavorite, onIsFavoriteButtonClick
}) => {
  const isMainPage = currentPage === Page.MAIN;
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{releaseDate}</span>
      </p>

      <div className="movie-card__buttons">
        <button
          onClick={() => {
            history.push(`${AppRoute.MOVIE_PAGE}${id}${AppRoute.PLAYER}`);
          }}
          className="btn btn--play movie-card__button"
          type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>

        <button
          onClick={onIsFavoriteButtonClick}
          className="btn btn--list movie-card__button" type="button">
          {isFavorite
            ? <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
            : <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>}
          <span>My list</span>
        </button>

        {!isMainPage && <Link to={`${AppRoute.MOVIE_PAGE}${id}${AppRoute.REVIEW}`}
          className="btn btn--review movie-card__button">
            Add review
        </Link>}
      </div>
    </div>
  );
};


MovieInfo.propTypes = {
  currentPage: string.isRequired,
  id: number,
  title: string.isRequired,
  genre: string.isRequired,
  releaseDate: number.isRequired,
  isFavorite: bool.isRequired,
  onIsFavoriteButtonClick: func.isFavorite,
};

export default MovieInfo;

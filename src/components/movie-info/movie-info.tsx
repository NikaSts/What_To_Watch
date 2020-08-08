import * as React from 'react';
import {Link} from 'react-router-dom';
import history from '../../history';
import {AppRoute, Page} from '../../utils/consts';

interface MovieInfoProps {
  currentPage: string;
  id: number;
  title: string;
  genre: string;
  releaseDate: number;
  isFavorite: boolean;
  onIsFavoriteButtonClick: () => void;
  isAuth: boolean;
}

const MovieInfo: React.FC<MovieInfoProps> = ({
  currentPage, id, title, genre, releaseDate, isFavorite, onIsFavoriteButtonClick, isAuth
}: MovieInfoProps) => {
  const isMainPage: boolean = currentPage === Page.MAIN;
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{releaseDate}</span>
      </p>

      <div className="movie-card__buttons">

        <Link to={`${AppRoute.PLAYER}/${id}`}
          className="btn btn--play movie-card__button"
          type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </Link>

        <button
          onClick={() => {
            if (isAuth) {
              return onIsFavoriteButtonClick();
            }
            return history.push(AppRoute.LOGIN);
          }}
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

        {!isMainPage &&
          <Link to={`${AppRoute.MOVIE_PAGE}/${id}${AppRoute.REVIEW}`}
            className="btn btn--review movie-card__button">
            Add review
          </Link>}
      </div>
    </div>
  );
};


export default MovieInfo;

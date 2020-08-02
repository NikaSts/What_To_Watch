import React from 'react';
import {string, number, bool} from 'prop-types';
import {Link} from 'react-router-dom';
import history from '../../history';
import {AppRoute} from '../../utils/consts';


const MovieInfo = ({isMain, id, title, genre, releaseDate}) => {

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
            history.push(`${AppRoute.PLAYER}/${id}`);
          }}
          className="btn btn--play movie-card__button"
          type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list movie-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
        {!isMain && <Link to={`${AppRoute.MOVIE_PAGE}/${id}/review`}
          className="btn btn--review movie-card__button">
            Add review
        </Link>}
      </div>
    </div>
  );
};

MovieInfo.defaultProps = {
  isMain: false,
};

MovieInfo.propTypes = {
  isMain: bool.isRequired,
  id: number,
  title: string.isRequired,
  genre: string.isRequired,
  releaseDate: number.isRequired,
};

export default MovieInfo;

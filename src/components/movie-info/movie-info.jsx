import React from 'react';
import {movieType} from '../../types';


const MovieInfo = (props) => {
  const {activeMovie: {title, image, ratingScore, ratingLevel, ratingCount, text, director, starring}} = props;
  const shownActors = starring.slice(0, 4).join(`, `);

  return (
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={`img/${image}.jpg`} alt={title} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li className="movie-nav__item movie-nav__item--active">
                <a href="#" className="movie-nav__link">Overview</a>
              </li>
              <li className="movie-nav__item">
                <a href="#" className="movie-nav__link">Details</a>
              </li>
              <li className="movie-nav__item">
                <a href="#" className="movie-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>

          <div className="movie-rating">
            <div className="movie-rating__score">{ratingScore}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{ratingLevel}</span>
              <span className="movie-rating__count">{ratingCount} ratings</span>
            </p>
          </div>

          <div className="movie-card__text">
            {text.join(` `)}
            <p
              className="movie-card__director"><strong>Director: {director}</strong></p>

            <p className="movie-card__starring"><strong>Starring: {shownActors} and other</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  activeMovie: movieType.isRequired,
};
export default MovieInfo;

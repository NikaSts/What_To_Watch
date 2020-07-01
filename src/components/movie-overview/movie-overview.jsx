import React, {Fragment} from 'react';
import {movieType} from '../../types';


const MovieOverview = ({activeMovie}) => {
  const {ratingScore, ratingLevel, ratingCount, text, director, starring} = activeMovie;
  const shownActors = starring.slice(0, 4).join(`, `);

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {text.join(` `)}
        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {shownActors} and other</strong></p>
      </div>

    </Fragment>
  );
};

MovieOverview.propTypes = {
  activeMovie: movieType.isRequired,
};
export default MovieOverview;

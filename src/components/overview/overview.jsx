import React, {Fragment} from 'react';
import {string, number, arrayOf} from 'prop-types';


const Overview = ({ratingScore, ratingLevel, ratingCount, text, director, starring}) => {
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

Overview.propTypes = {
  ratingScore: string.isRequired,
  ratingLevel: string.isRequired,
  ratingCount: number.isRequired,
  text: arrayOf(string).isRequired,
  director: string.isRequired,
  starring: arrayOf(string).isRequired,
};
export default Overview;

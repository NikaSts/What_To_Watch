import React, {Fragment} from 'react';
import {string, number, arrayOf} from 'prop-types';
import {MAX_ACTORS_TO_SHOW} from '../../utils/consts';


const Overview = ({ratingScore, ratingLevel, ratingCount, paragraphs, director, stars}) => {
  const shownActors = stars.slice(0, MAX_ACTORS_TO_SHOW).join(`, `);

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
        {paragraphs.map((paragraph, i) => <Fragment key={i}><p>{paragraph}</p></Fragment>)}
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
  paragraphs: arrayOf(string).isRequired,
  director: string.isRequired,
  stars: arrayOf(string).isRequired,
};
export default Overview;

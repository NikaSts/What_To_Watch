import * as React from 'react';
import {MAX_ACTORS_TO_SHOW} from '../../utils/consts';

interface OverviewProps {
  ratingScore: number;
  ratingLevel: string;
  ratingCount: number;
  description: string;
  director: string;
  stars: Array<string>;
}

const Overview: React.FC<OverviewProps> = ({
  ratingScore, ratingLevel, ratingCount, description, director, stars
}: OverviewProps) => {
  const shownActors = stars.slice(0, MAX_ACTORS_TO_SHOW).join(`, `);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {shownActors} and other</strong></p>
      </div>
    </React.Fragment>
  );
};


export default Overview;

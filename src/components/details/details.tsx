import * as React from 'react';
import {formatTime} from '../../utils/funcs';

interface DetailsProps {
  runTime: number;
  genre: string;
  releaseDate: number;
  director: string;
  stars: Array<string>;
}

const Details: React.FC<DetailsProps> = ({
  runTime, genre, releaseDate, director, stars
}: DetailsProps) => (
  <div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{director}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {[...stars].map((star) => <React.Fragment key={star}>{star},<br/></React.Fragment>)}
        </span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{formatTime(runTime)}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">{genre}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{releaseDate}</span>
      </p>
    </div>
  </div>
);


export default Details;

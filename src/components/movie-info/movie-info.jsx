import React from 'react';
import {bool, string, number, func} from 'prop-types';
import Controls from '../controls/controls';


const MovieInfo = ({title, genre, releaseDate, isSignedIn, onPlayButtonClick}) => {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{releaseDate}</span>
      </p>

      <Controls
        isSignedIn={isSignedIn}
        onPlayButtonClick={onPlayButtonClick}
      />
    </div>
  );
};

MovieInfo.propTypes = {
  title: string.isRequired,
  genre: string.isRequired,
  releaseDate: number.isRequired,
  isSignedIn: bool.isRequired,
  onPlayButtonClick: func.isRequired,
};

export default MovieInfo;

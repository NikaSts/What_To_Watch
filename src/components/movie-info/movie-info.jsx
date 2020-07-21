import React from 'react';
import {bool, string, number} from 'prop-types';
import Controls from '../сontrols/controls';


const MovieInfo = ({title, genre, releaseDate, isLogged}) => {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{releaseDate}</span>
      </p>

      <Controls
        isLogged={isLogged}
      />
    </div>
  );
};

MovieInfo.propTypes = {
  title: string.isRequired,
  genre: string.isRequired,
  releaseDate: number.isRequired,
  isLogged: bool.isRequired,
};

export default MovieInfo;

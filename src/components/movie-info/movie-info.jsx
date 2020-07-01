import React from 'react';
import {bool} from 'prop-types';
import Controls from '../сontrols/controls.jsx';
import {movieType} from '../../types';


const MovieInfo = ({movie, isLogged}) => {
  const {title, genre, releaseDate} = movie;
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
  movie: movieType.isRequired,
  isLogged: bool.isRequired,
};

export default MovieInfo;

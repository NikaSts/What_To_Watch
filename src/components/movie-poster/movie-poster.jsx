import React from 'react';
import {movieType} from '../../types';

const MoviePoster = ({movie: {image, title}}) => (
  <div className="movie-card__poster">
    <img src={`img/${image}-poster.jpg`} alt={title} width="218" height="327" />
  </div>
);

MoviePoster.propTypes = {
  movie: movieType.isRequired,
};

export default MoviePoster;

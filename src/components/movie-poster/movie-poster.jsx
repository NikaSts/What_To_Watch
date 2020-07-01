import React from 'react';
import {string} from 'prop-types';

const MoviePoster = ({image, title}) => (
  <div className="movie-card__poster">
    <img src={`img/${image}-poster.jpg`} alt={title} width="218" height="327" />
  </div>
);

MoviePoster.propTypes = {
  title: string.isRequired,
  image: string.isRequired,
};

export default MoviePoster;

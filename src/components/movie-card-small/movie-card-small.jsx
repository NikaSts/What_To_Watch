import React from 'react';
import {func} from 'prop-types';
import {cardMovieType} from '../../types.js';


const MovieCardSmall = ({movie: {title, image}, onMovieTitleClick, onMovieCardMouseEnter}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onClick={onMovieTitleClick}
    onMouseEnter={onMovieCardMouseEnter}
  >
    <div className="small-movie-card__image">
      <img src={`img/${image}.jpg`} alt={title} width="280" height="175" />
    </div>
    <h3
      className="small-movie-card__title">
      <a
        className="small-movie-card__link"
        href="movie-page.html"
        onClick={(evt) => {
          evt.preventDefault();
          onMovieTitleClick();
        }}
      >
        {title}</a>
    </h3>
  </article>
);

MovieCardSmall.propTypes = {
  movie: cardMovieType.isRequired,
  onMovieTitleClick: func.isRequired,
  onMovieCardMouseEnter: func.isRequired,
};


export default MovieCardSmall;

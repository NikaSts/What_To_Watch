import React from 'react';
import {func, string, node} from 'prop-types';

const MovieCard = ({
  title, onMovieTitleClick, onMouseEnter, onMouseLeave, children
}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onClick={onMovieTitleClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="small-movie-card__image">
      {children}
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">
        {title}
      </a>
    </h3>
  </article>
);

MovieCard.propTypes = {
  title: string.isRequired,
  onMovieTitleClick: func.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
  children: node.isRequired,
};

export default MovieCard;

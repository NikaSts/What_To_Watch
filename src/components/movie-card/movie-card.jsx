import React from 'react';
import PropTypes from 'prop-types';


const MovieCard = ({movie: {title, image}, onMovieTitleClick, onMovieCardHover}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/${image}.jpg`} alt={title} width="280" height="175" />
      </div>
      <h3
        className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onMovieTitleClick}
          onMouseEnter={onMovieCardHover}
        >
          {title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
};


export default MovieCard;

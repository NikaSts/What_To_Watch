import React from 'react';
import PropTypes from 'prop-types';


const SmallMovieCard = ({movie: {title, image}, onMovieTitleClick, onSmallMovieCardHover}) => {
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
          onMouseEnter={onSmallMovieCardHover}
        >
          {title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onSmallMovieCardHover: PropTypes.func.isRequired,
};


export default SmallMovieCard;

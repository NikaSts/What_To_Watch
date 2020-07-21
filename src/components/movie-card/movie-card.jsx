import React from 'react';
import VideoPlayer from '../video-player/video-player';
import withActivePlayer from '../../hocs/with-active-player/with-active-player';
import {func} from 'prop-types';
import {cardMovieType} from '../../types';

const WrappedPlayer = withActivePlayer(VideoPlayer);

const MovieCard = ({movie: {title, image, preview}, onMovieTitleClick}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onClick={onMovieTitleClick}
  >
    <WrappedPlayer
      src={preview}
      poster={`img/${image}.jpg`}
      muted={true}
    />
    <h3 className="small-movie-card__title">
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

MovieCard.propTypes = {
  movie: cardMovieType.isRequired,
  onMovieTitleClick: func.isRequired,
};

export default MovieCard;

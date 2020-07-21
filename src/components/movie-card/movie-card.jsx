import React from 'react';
import {func, string, bool} from 'prop-types';
import VideoPlayer from '../video-player/video-player';

const MovieCard = ({
  title, src, poster, onMovieTitleClick, isPlaying, onMouseEnter, onMouseLeave
}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onClick={onMovieTitleClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}

  >
    <VideoPlayer
      src={src}
      poster={poster}
      muted={true}
      isPlaying={isPlaying}
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
  title: string.isRequired,
  src: string.isRequired,
  poster: string.isRequired,
  onMovieTitleClick: func.isRequired,
  isPlaying: bool.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
};

export default MovieCard;

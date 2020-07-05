import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import {cardMovieType} from '../../types.js';
import VideoPlayer from '../video-player/video-player.jsx';

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {
      movie: {title, image, preview},
      onMovieTitleClick, onMovieCardMouseEnter, onMovieCardMouseLeave
    } = this.props;
    const {isPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={onMovieTitleClick}
        onMouseEnter={(movie) => {
          this.setState({isPlaying: true});
          onMovieCardMouseEnter(movie);
        }}
        onMouseLeave={() => {
          this.setState({isPlaying: false});
          onMovieCardMouseLeave();
        }}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={preview}
            poster={`img/${image}.jpg`}
            muted={true}
            isPlaying={isPlaying}
          />
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
      </article>);
  }
}

MovieCard.propTypes = {
  movie: cardMovieType.isRequired,
  onMovieTitleClick: func.isRequired,
  onMovieCardMouseEnter: func.isRequired,
  onMovieCardMouseLeave: func.isRequired,
};

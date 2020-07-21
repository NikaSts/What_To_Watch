import React from 'react';
import MovieCard from '../movie-card/movie-card';
import {arrayOf, func} from 'prop-types';
import {cardMovieType} from '../../types';
import withActivePlayer from '../../hocs/with-active-player/with-active-player';


const WrappedMovieCard = withActivePlayer(MovieCard);

const MovieList = ({movies, onMovieTitleClick}) => (
  <div className="catalog__movies-list">
    {movies.map((movie) => {
      const {title, image, preview} = movie;
      return (
        <WrappedMovieCard
          key={movie.id}
          title={title}
          src={preview}
          poster={`img/${image}.jpg`}
          onMovieTitleClick={() => onMovieTitleClick(movie)}
        />
      );
    })}
  </div>
);

MovieList.propTypes = {
  movies: arrayOf(cardMovieType.isRequired).isRequired,
  onMovieTitleClick: func.isRequired,
};

export default MovieList;

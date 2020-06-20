import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const handleMovieCardHover = () => {};

const MoviesList = ({movies, onMovieTitleClick}) => {
  const movieCards = movies
    .map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieTitleClick={onMovieTitleClick}
          onMovieCardHover={handleMovieCardHover}
        />
      );
    });

  return (
    <div className="catalog__movies-list">
      {movieCards}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;

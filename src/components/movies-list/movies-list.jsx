import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const handleMovieCardMouseEnter = () => {};

const MoviesList = ({movies, onMovieTitleClick}) => {
  const movieCards = movies
    .map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieTitleClick={onMovieTitleClick}
          onMovieCardMouseEnter={handleMovieCardMouseEnter}
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
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;

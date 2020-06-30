import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';


const MoviesList = ({movies, onMovieTitleClick, onMovieCardMouseEnter}) => (
  <div className="catalog__movies-list">
    {movies.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieTitleClick={() => onMovieTitleClick(movie.id)}
          onMovieCardMouseEnter={() => onMovieCardMouseEnter(movie.id)}
        />
      );
    })}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onMovieCardMouseEnter: PropTypes.func.isRequired,
};

export default MoviesList;

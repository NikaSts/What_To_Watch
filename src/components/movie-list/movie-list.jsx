import React from 'react';
import MovieCard from '../movie-card/movie-card';
import {arrayOf, func} from 'prop-types';
import {cardMovieType} from '../../types';


const MovieList = ({movies, onMovieTitleClick}) => (
  <div className="catalog__movies-list">
    {movies.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          movie={movie}
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

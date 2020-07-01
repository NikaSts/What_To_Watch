import React from 'react';
import {arrayOf, func} from 'prop-types';
import MovieListItem from '../movie-list-item/movie-list-item.jsx';
import {cardMovieType} from '../../types.js';


const MovieList = ({movies, onMovieTitleClick, onMovieCardMouseEnter}) => (
  <div className="catalog__movies-list">
    {movies.map((movie) => {
      return (
        <MovieListItem
          key={movie.id}
          movie={movie}
          onMovieTitleClick={() => onMovieTitleClick(movie)}
          onMovieCardMouseEnter={() => onMovieCardMouseEnter(movie)}
        />
      );
    })}
  </div>
);

MovieList.propTypes = {
  movies: arrayOf(cardMovieType.isRequired).isRequired,
  onMovieTitleClick: func.isRequired,
  onMovieCardMouseEnter: func.isRequired,
};

export default MovieList;

import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';


const onMovieTitleHover = () => {};

const MoviesList = ({movies, onMovieTitleClick}) => {
  const movieCards = movies
    .map((movie) => {
      return (
        <SmallMovieCard
          key={movie.id}
          movie={movie}
          onMovieTitleClick={onMovieTitleClick}
          onMovieTitleHover={onMovieTitleHover}
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
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onMovieTitleHover: PropTypes.func.isRequired,
};

export default MoviesList;

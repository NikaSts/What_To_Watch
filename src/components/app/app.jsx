import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from "prop-types";


const movieTitleHandler = () => { };

const App = ({movie, movies}) => {
  return (
    <Main
      movie={movie}
      movies={movies}
      onMovieTitleClick={movieTitleHandler}
    />
  );
};

App.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })).isRequired,
};

export default App;

import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from "prop-types";


const movieTitleHandler = () => { };

const App = ({movie, movieTitles}) => {
  return (
    <Main
      movie={movie}
      movieTitles={movieTitles}
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
  movieTitles: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
};

export default App;

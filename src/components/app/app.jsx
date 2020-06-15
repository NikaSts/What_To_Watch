import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from "prop-types";


const App = ({film, filmTitles}) => {
  return (
    <Main film={film} filmTitles={filmTitles} />
  );
};

App.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  filmTitles: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
};

export default App;

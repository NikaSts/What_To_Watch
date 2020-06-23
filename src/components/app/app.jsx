import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';


const handleMovieTitleClick = () => { };

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: 4,
    };
  }

  _renderApp() {
    const {promoMovie, movies} = this.props;

    const {activeMovie: id} = this.state;
    if (id === null) {
      return (
        <Main
          promoMovie={promoMovie}
          movies={movies}
          onMovieTitleClick={handleMovieTitleClick}
        />
      );
    }
    return this._renderMoviePage(id);
  }

  _renderMoviePage(id) {
    const {movies} = this.props;
    return (
      <MoviePage
        movieId={id}
        movies={movies}
        onMovieTitleClick={handleMovieTitleClick}
      />
    );
  }

  render() {
    const {activeMovie: id} = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie">
            {this._renderMoviePage(id)}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movieId: PropTypes.string.isRequired,
  promoMovie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        ratingScore: PropTypes.string.isRequired,
        ratingLevel: PropTypes.string.isRequired,
        ratingCount: PropTypes.number.isRequired,
        text: PropTypes.arrayOf(PropTypes.string).isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      })).isRequired,
};

import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: ``,
      hoveredCard: ``,
    };

    this.handleMovieTitleClick = this.handleMovieTitleClick.bind(this);
    this.handleMovieCardMouseEnter = this.handleMovieCardMouseEnter.bind(this);
  }

  _renderApp() {
    const {promoMovie, movies} = this.props;
    const {activeMovie: id} = this.state;
    if (id === ``) {
      return (
        <Main
          promoMovie={promoMovie}
          movies={movies}
          onMovieTitleClick={this.handleMovieTitleClick}
          onMovieCardMouseEnter={this.handleMovieCardMouseEnter}
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
        onMovieTitleClick={this.handleMovieTitleClick}
        onMovieCardMouseEnter={this.handleMovieCardMouseEnter}
      />
    );
  }

  handleMovieTitleClick(activeMovie) {
    this.setState({activeMovie});
  }

  handleMovieCardMouseEnter(hoveredCard) {
    this.setState({hoveredCard});
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

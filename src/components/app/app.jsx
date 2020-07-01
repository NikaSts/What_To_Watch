import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {arrayOf, string} from "prop-types";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {movieType, promoMovieType} from '../../types';


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: null,
      hoveredCard: ``,
    };

    this._handleMovieTitleClick = this._handleMovieTitleClick.bind(this);
    this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
  }

  _renderApp() {
    const {promoMovie, movies, genres} = this.props;
    const {activeMovie} = this.state;
    if (activeMovie) {
      return this._renderMoviePage(activeMovie, movies);
    }
    return this._renderMainPage(promoMovie, movies, genres);
  }

  _renderMainPage(promoMovie, movies, genres) {
    return (
      <Main
        promoMovie={promoMovie}
        movies={movies}
        genres={genres}
        onMovieTitleClick={this._handleMovieTitleClick}
        onMovieCardMouseEnter={this._handleMovieCardMouseEnter}
      />
    );
  }

  _renderMoviePage(activeMovie, movies) {
    return (
      <MoviePage
        activeMovie={activeMovie}
        movies={movies}
        onMovieTitleClick={this._handleMovieTitleClick}
        onMovieCardMouseEnter={this._handleMovieCardMouseEnter}
      />
    );
  }

  _handleMovieTitleClick(activeMovie) {
    this.setState({activeMovie});
  }

  _handleMovieCardMouseEnter(hoveredCard) {
    this.setState({hoveredCard});
  }

  render() {
    const {activeMovie} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie">
            {this._renderMoviePage(activeMovie)}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoMovie: promoMovieType.isRequired,
  movies: arrayOf(movieType.isRequired).isRequired,
  genres: arrayOf(string.isRequired).isRequired,
};

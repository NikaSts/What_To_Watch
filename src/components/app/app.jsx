import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {arrayOf, string, func, number} from "prop-types";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {connect} from 'react-redux';
import {
  changeActiveGenre, getMoviesByGenre, incrementShownMoviesCount, setDefaultShownMoviesCount
} from '../../store/actions';
import {movieType, cardMovieType, promoMovieType} from '../../types';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: null,
    };

    this._handleMovieTitleClick = this._handleMovieTitleClick.bind(this);
  }

  _renderApp() {
    const {activeMovie} = this.state;
    if (activeMovie) {
      return this._renderMoviePage();
    }
    return this._renderMainPage();
  }

  _renderMainPage() {
    const {
      promoMovie,
      genres,
      activeGenre,
      moviesByGenre,
      onGenreClick,
      shownMoviesCount,
      onShowMoreButtonClick,
    } = this.props;

    return (
      <Main
        promoMovie={promoMovie}
        genres={genres}
        activeGenre={activeGenre}
        moviesByGenre={moviesByGenre}
        onGenreClick={onGenreClick}
        onMovieTitleClick={this._handleMovieTitleClick}
        shownMoviesCount={shownMoviesCount}
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
    );
  }

  _renderMoviePage() {
    const {activeMovie} = this.state;
    const {movies} = this.props;
    return (
      <MoviePage
        activeMovie={activeMovie}
        movies={movies}
        onMovieTitleClick={this._handleMovieTitleClick}
      />
    );
  }

  _handleMovieTitleClick(activeMovie) {
    this.setState({activeMovie});
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie">
            {this._renderMoviePage()}
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
  activeGenre: string.isRequired,
  moviesByGenre: arrayOf(cardMovieType.isRequired).isRequired,
  onGenreClick: func.isRequired,
  shownMoviesCount: number.isRequired,
  onShowMoreButtonClick: func.isRequired,
};

const mapStateToProps = ({
  movies, genres, promoMovie, activeGenre, moviesByGenre, shownMoviesCount
}) => ({
  movies, genres, promoMovie, activeGenre, moviesByGenre, shownMoviesCount
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(changeActiveGenre(genre));
    dispatch(getMoviesByGenre(genre));
    dispatch(setDefaultShownMoviesCount());
  },
  onShowMoreButtonClick() {
    dispatch(incrementShownMoviesCount());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';


const movieTitleHandler = () => { };

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {promoMovie, movies} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              promoMovie={promoMovie}
              movies={movies}
              onMovieTitleClick={movieTitleHandler}
            />
          </Route>
          <Route exact path="/movie">
            <MoviePage
              movies={movies}
              onMovieTitleClick={movieTitleHandler}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoMovie: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

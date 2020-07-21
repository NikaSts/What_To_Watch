import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import {connect} from 'react-redux';
import {movieType, promoMovieType} from '../../types';


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {activeMovie} = this.props;
    if (activeMovie) {
      return this._renderMoviePage();
    }
    return this._renderMainPage();
  }

  _renderMainPage() {
    const {promoMovie} = this.props;
    return (
      <Main
        promoMovie={promoMovie}
      />
    );
  }

  _renderMoviePage() {
    return (
      <MoviePage />
    );
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
  activeMovie: movieType,
  promoMovie: promoMovieType.isRequired,
};

const mapStateToProps = ({activeMovie, promoMovie}) => ({activeMovie, promoMovie});


export {App};
export default connect(mapStateToProps)(App);

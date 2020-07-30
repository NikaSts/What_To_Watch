import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {bool, func} from 'prop-types';

import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import SignInPage from '../sign-in-page/sign-in-page';
import VideoPlayer from '../video-player/video-player';
import withFullScreen from '../../hocs/with-full-screen/with-full-screen';
import {movieType, promoMovieType} from '../../types';
import {ActionCreator as PlayerActionCreator} from '../../store/player/actions';
import {Operation as UserOperation} from '../../store/user/actions';
import {getActiveMovie, getPromoMovie} from '../../store/movies/selectors';
import {checkPlayerStatus} from '../../store/player/selectors';
import {getIsAuthorizing, getIsAuthorizationError} from '../../store/user/selectors';


const PlayerWithFullScreen = withFullScreen(VideoPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {activeMovie, isVideoPlayer, isAuthorizing} = this.props;
    if (isAuthorizing) {
      return this._renderSignInPage();
    }
    if (isVideoPlayer) {
      return this._renderVideoPlayer();
    }
    if (activeMovie) {
      return this._renderMoviePage();
    }
    return this._renderMainPage();
  }

  _renderMainPage() {
    return <Main />;
  }

  _renderMoviePage() {
    return <MoviePage />;
  }

  _renderVideoPlayer() {
    const {activeMovie, promoMovie, onExitButtonClick} = this.props;
    if (activeMovie) {
      return <PlayerWithFullScreen
        title={activeMovie.title}
        src={activeMovie.video}
        previewImage={activeMovie.previewImage}
        onExitButtonClick={onExitButtonClick}
      />;
    }
    return <PlayerWithFullScreen
      title={promoMovie.title}
      src={promoMovie.video}
      previewImage={promoMovie.previewImage}
      onExitButtonClick={onExitButtonClick}
    />;
  }

  _renderSignInPage() {
    const {login, isAuthorizationError} = this.props;
    return <SignInPage
      onSubmit={login}
      isAuthorizationError={isAuthorizationError}
    />;
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
          <Route exact path="/auth">
            {this._renderSignInPage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  activeMovie: movieType,
  promoMovie: promoMovieType,
  isVideoPlayer: bool.isRequired,
  onExitButtonClick: func.isRequired,
  login: func.isRequired,
  isAuthorizing: bool.isRequired,
  isAuthorizationError: bool.isRequired,
};

const mapStateToProps = (state) => ({
  activeMovie: getActiveMovie(state),
  promoMovie: getPromoMovie(state),
  isVideoPlayer: checkPlayerStatus(state),
  isAuthorizing: getIsAuthorizing(state),
  isAuthorizationError: getIsAuthorizationError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onExitButtonClick(activeMovie) {
    dispatch(PlayerActionCreator.closeFullScreenPlayer(activeMovie));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

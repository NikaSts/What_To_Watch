import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import SignInPage from '../sign-in-page/sign-in-page';
import {connect} from 'react-redux';
import {movieType} from '../../types';
import {bool, func} from 'prop-types';
import withFullScreen from '../../hocs/with-full-screen/with-full-screen';
import VideoPlayer from '../video-player/video-player';
import {PlayerActionCreator} from '../../store/player/player';
import {getActiveMovie, getPromoMovie} from '../../store/data/selectors';
import {checkPlayerStatus} from '../../store/player/selectors';
import {UserOperation} from '../../store/user/user';


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
    const {login} = this.props;
    return <SignInPage
      onSubmit={login}
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
  promoMovie: movieType.isRequired,
  isVideoPlayer: bool.isRequired,
  onExitButtonClick: func.isRequired,
  login: func.isRequired,
  isAuthorizing: bool.isRequired,
};

const mapStateToProps = (store) => ({
  activeMovie: getActiveMovie(store),
  promoMovie: getPromoMovie(store),
  isVideoPlayer: checkPlayerStatus(store),
  isAuthorizing: store.USER.isAuthorizing,
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

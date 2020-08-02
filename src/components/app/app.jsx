import React, {PureComponent} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {bool, func} from 'prop-types';
import history from '../../history';

import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import SignInPage from '../sign-in-page/sign-in-page';
import VideoPlayer from '../video-player/video-player';
import withFullScreen from '../../hocs/with-full-screen/with-full-screen';
import {movieType, promoMovieType} from '../../types';
import {ActionCreator as PlayerActionCreator} from '../../store/player/actions';
import {Operation as UserOperation} from '../../store/user/actions';
import {getPromoMovie} from '../../store/movies/selectors';
import {checkPlayerStatus} from '../../store/player/selectors';
import {getIsAuthorizationError} from '../../store/user/selectors';
import {AppRoute} from '../../utils/consts';
import AddReview from '../add-review/add-review';


const PlayerWithFullScreen = withFullScreen(VideoPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
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

  render() {
    const {login, isAuthorizationError} = this.props;
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact path={AppRoute.ROOT}
            render={() => <Main />}
          />
          <Route
            exact path={AppRoute.LOGIN}
            render={() => <SignInPage
              onSubmit={login}
              isAuthorizationError={isAuthorizationError} />}
          />
          <Route
            exact path={`${AppRoute.MOVIE_PAGE}/:id`}
            render={({match}) => {
              const id = Number(match.params.id);
              return <MoviePage id={id} />;
            }}
          />
          <Route
            path={`${AppRoute.MOVIE_PAGE}/:id/review`}
            render={({match}) => {
              const id = Number(match.params.id);
              return <AddReview
                id={id} />;
            } }
          />
          <Route
            render={() => <h2>Page not found</h2>}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  activeMovie: movieType,
  promoMovie: promoMovieType,
  isVideoPlayer: bool.isRequired,
  onExitButtonClick: func.isRequired,
  login: func.isRequired,
  isAuthorizationError: bool.isRequired,
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  isVideoPlayer: checkPlayerStatus(state),
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

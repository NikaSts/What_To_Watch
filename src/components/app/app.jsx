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
import {getPromoMovie} from '../../store/movies/selectors';
import {checkPlayerStatus} from '../../store/player/selectors';
import {AppRoute} from '../../utils/consts';
import AddReview from '../add-review/add-review';
import MyListPage from '../my-list-page/my-list-page';


const PlayerWithFullScreen = withFullScreen(VideoPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  /*   _renderVideoPlayer() {
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
 */

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact path={AppRoute.ROOT}
            render={() => <Main />}
          />
          <Route
            exact path={AppRoute.LOGIN}
            render={() => <SignInPage />}
          />
          <Route
            path={`${AppRoute.PLAYER}/:id`}
            render={({match}) => {
              const id = Number(match.params.id);
              return <PlayerWithFullScreen id={id} />;
            }}
          />
          <Route
            exact path={AppRoute.MY_LIST}
            render={() => <MyListPage />}
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
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  isVideoPlayer: checkPlayerStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onExitButtonClick(activeMovie) {
    dispatch(PlayerActionCreator.closeFullScreenPlayer(activeMovie));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

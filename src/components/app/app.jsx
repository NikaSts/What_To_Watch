import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../../history';

import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import SignInPage from '../sign-in-page/sign-in-page';
import VideoPlayer from '../video-player/video-player';
import AddReview from '../add-review/add-review';
import MyListPage from '../my-list-page/my-list-page';
import LoadingPage from '../loading-page/loading-page';
import withFullScreen from '../../hocs/with-full-screen/with-full-screen';
import {AppRoute} from '../../utils/consts';
import {bool} from 'prop-types';
import {getLoadingStatus} from '../../store/movies/selectors';
import {connect} from 'react-redux';
import ErrorPage from '../error-page/error-page';


const PlayerWithFullScreen = withFullScreen(VideoPlayer);

const App = ({isLoading}) => {
  if (isLoading) {
    return <LoadingPage />;
  }

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
          exact path={AppRoute.MY_LIST}
          render={() => <MyListPage />}
        />
        <Route
          exact path={`${AppRoute.MOVIE_PAGE}:id`}
          render={({match}) => {
            const id = Number(match.params.id);
            return <MoviePage id={id} />;
          }}
        />
        <Route
          path={`${AppRoute.MOVIE_PAGE}:id${AppRoute.REVIEW}`}
          render={({match}) => {
            const id = Number(match.params.id);
            return <AddReview
              id={id} />;
          } }
        />
        <Route
          path={`${AppRoute.MOVIE_PAGE}:id${AppRoute.PLAYER}`}
          render={({match}) => {
            const id = Number(match.params.id);
            return <PlayerWithFullScreen id={id} />;
          }}
        />
        <Route
          render={() => <ErrorPage />}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  isLoading: bool.isRequired,
};


const mapStateToProps = (state) => ({
  isLoading: getLoadingStatus(state),
});


export {App};
export default connect(mapStateToProps)(App);

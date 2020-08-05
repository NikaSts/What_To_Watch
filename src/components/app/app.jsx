import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import history from '../../history';
import {bool, func} from 'prop-types';

import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import SignInPage from '../sign-in-page/sign-in-page';
import VideoPlayer from '../video-player/video-player';
import AddReview from '../add-review/add-review';
import MyListPage from '../my-list-page/my-list-page';
import LoadingPage from '../loading-page/loading-page';
import ErrorPage from '../error-page/error-page';

import withFullScreen from '../../hocs/with-full-screen/with-full-screen';
import withFormHandlers from '../../hocs/with-form-handlers/with-form-handlers';

import {getLoadingStatus, getErrorStatus} from '../../store/app-state/selectors';
import {Operation as MoviesOperation} from '../../store/movies/actions';
import {AppRoute} from '../../utils/consts';


const PlayerWithFullScreen = withFullScreen(VideoPlayer);
const AddReviewWithFormHandlers = withFormHandlers(AddReview);
const App = ({isLoading, isError, onFormSubmit}) => {
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
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
            return <AddReviewWithFormHandlers
              id={id}
              onFormSubmit={onFormSubmit} />;
          }}
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
  isError: bool.isRequired,
  onFormSubmit: func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: getLoadingStatus(state),
  isError: getErrorStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(movieId, review) {
    dispatch(MoviesOperation.sendReview(movieId, review));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

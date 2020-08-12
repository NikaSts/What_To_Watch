import {ActionType, EntryPoint} from '../../utils/consts';
import {movieAdapter} from '../../adapter/movie-adapter';
import {ActionCreator as AppActionCreator} from '../app-state/actions';
import history from '../../history';

export const ActionCreator = {
  getMovies: (movies) => ({
    type: ActionType.GET_MOVIES,
    payload: {movies},
  }),
  getFavoriteMovies: (favoriteMovies) => ({
    type: ActionType.GET_FAVORITE_MOVIES,
    payload: {favoriteMovies},
  }),
  getPromoMovie: (promoMovie) => ({
    type: ActionType.GET_PROMO_MOVIE,
    payload: {promoMovie},
  }),
  getReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: {reviews},
  }),
};

export const Operation = {
  loadMovies: () => (dispatch, getState, api) => (
    api.get(EntryPoint.MOVIES)
      .then((response) => {
        dispatch(ActionCreator.getMovies(response.data
          .map((movie) => movieAdapter(movie))
        ));
        dispatch(AppActionCreator.setLoadingStatus(false));
      })
      .catch(() => {
        dispatch(AppActionCreator.setErrorStatus(true));
        dispatch(AppActionCreator.setLoadingStatus(false));
      })
  ),
  loadFavoriteMovies: () => (dispatch, getState, api) => (
    api.get(EntryPoint.FAVORITES)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.getFavoriteMovies(response.data
            .map((movie) => movieAdapter(movie))));
          dispatch(AppActionCreator.setLoadingStatus(false));
        }
      })
      .catch(() => {
        dispatch(AppActionCreator.setLoadingStatus(true));
        dispatch(AppActionCreator.setLoadingStatus(false));
      })
  ),
  loadPromoMovie: () => (dispatch, getState, api) => (
    api.get(EntryPoint.PROMO)
      .then((response) => {
        dispatch(ActionCreator.getPromoMovie(movieAdapter(response.data)));
        dispatch(AppActionCreator.setLoadingStatus(false));
      })
      .catch(() => {
        dispatch(AppActionCreator.setErrorStatus(true));
        dispatch(AppActionCreator.setLoadingStatus(false));
      })
  ),
  loadReviews: (movieId) => (dispatch, getState, api) => (
    api.get(`${EntryPoint.REVIEWS}/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.getReviews(response.data));
        dispatch(AppActionCreator.setLoadingStatus(false));
      })
      .catch(() => {
        dispatch(AppActionCreator.setErrorStatus(true));
        dispatch(AppActionCreator.setLoadingStatus(false));
      })
  ),
  sendFavoriteMovie: (movieId, isFavorite) => (dispatch, getState, api) => {
    dispatch(AppActionCreator.setSendingStatus(true));
    const status = isFavorite ? 0 : 1;
    return api.post(`${EntryPoint.FAVORITES}/${movieId}/${status}`, {
      [`is_favorite`]: isFavorite,
    })
    .then(() => {
      dispatch(Operation.loadMovies());
      dispatch(Operation.loadPromoMovie());
    })
    .catch(() => {
      dispatch(AppActionCreator.setErrorStatus(true));
      dispatch(AppActionCreator.setSendingStatus(false));
    });
  },
  sendReview: (movieId, {rating, comment}) => (dispatch, getState, api) => {
    dispatch(AppActionCreator.setSendingStatus(true));
    return api.post(`${EntryPoint.REVIEWS}/${movieId}`, {rating, comment})
      .then(() => {
        dispatch(AppActionCreator.setSendingStatus(false));
        history.goBack();
      })
      .catch(() => {
        dispatch(AppActionCreator.setErrorStatus(true));
        dispatch(AppActionCreator.setSendingStatus(false));
      });
  }
};

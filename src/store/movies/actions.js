import {ActionType, EntryPoint} from '../../utils/consts';
import {movieAdapter} from '../../adapter/movie-adapter';


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
  setMovieFavoriteStatus: () => ({
    type: ActionType.SET_MOVIE_FAVORITE_STATUS,
  }),
  setLoadingStatus: (status) => ({
    type: ActionType.SET_LOADING_STATUS,
    payload: {status},
  }),
};

export const Operation = {
  loadMovies: () => (dispatch, getState, api) => (
    api.get(EntryPoint.MOVIES)
      .then((response) => {
        dispatch(ActionCreator.getMovies(response.data
          .map((movie) => movieAdapter(movie))
        ));
        dispatch(ActionCreator.setLoadingStatus(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setLoadingErrorStatus(true));
        dispatch(ActionCreator.setLoadingStatus(false));
      })
  ),
  loadFavoriteMovies: () => (dispatch, getState, api) => (
    api.get(EntryPoint.FAVORITES)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.getFavoriteMovies(response.data
            .map((movie) => movieAdapter(movie))));
          dispatch(ActionCreator.setLoadingStatus(false));
        }
      })
      .catch(() => {
        dispatch(ActionCreator.setLoadingErrorStatus(true));
        dispatch(ActionCreator.setLoadingStatus(false));
      })
  ),
  loadPromoMovie: () => (dispatch, getState, api) => (
    api.get(EntryPoint.PROMO)
      .then((response) => {
        dispatch(ActionCreator.getPromoMovie(movieAdapter(response.data)));
        dispatch(ActionCreator.setLoadingStatus(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setLoadingErrorStatus(true));
        dispatch(ActionCreator.setLoadingStatus(false));
      })
  ),
  loadReviews: (movieId) => (dispatch, getState, api) => (
    api.get(`${EntryPoint.REVIEWS}/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.getReviews(response.data));
        dispatch(ActionCreator.setLoadingStatus(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setLoadingErrorStatus(true));
        dispatch(ActionCreator.setLoadingStatus(false));
      })
  ),
  sendFavoriteMovie: (movieId, isFavorite) => (dispatch, getState, api) => {
    const status = isFavorite ? 0 : 1;
    return api.post(`${EntryPoint.FAVORITES}/${movieId}/${status}`, {
      [`is_favorite`]: isFavorite,
    })
    .then(() => {
      dispatch(ActionCreator.setMovieFavoriteStatus());
      dispatch(Operation.loadMovies());
      dispatch(Operation.loadPromoMovie());
    });
  }
};

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
  })
};

export const Operation = {
  loadMovies: () => (dispatch, getState, api) => (
    api.get(EntryPoint.MOVIES)
      .then((response) => {
        dispatch(ActionCreator.getMovies(response.data
          .map((movie) => movieAdapter(movie))
        ));
      })
  ),
  loadFavoriteMovies: () => (dispatch, getState, api) => (
    api.get(EntryPoint.FAVORITES)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.getFavoriteMovies(response.data
          .map((movie) => movieAdapter(movie))));
        }
      })
  ),
  loadPromoMovie: () => (dispatch, getState, api) => (
    api.get(EntryPoint.PROMO)
      .then((response) => {
        dispatch(ActionCreator.getPromoMovie(movieAdapter(response.data)));
      })
  ),
  loadReviews: (movieId) => (dispatch, getState, api) => (
    api.get(`${EntryPoint.REVIEWS}/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.getReviews(response.data));
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

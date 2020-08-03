import {ActionType, EntryPoint} from '../../utils/consts';
import {movieAdapter} from '../../adapter/movie-adapter';


export const ActionCreator = {
  getMovies: (movies) => ({
    type: ActionType.GET_MOVIES,
    payload: {movies},
  }),
  getFavouriteMovies: (favouriteMovies) => ({
    type: ActionType.GET_FAVOURITE_MOVIES,
    payload: {favouriteMovies},
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
      })
  ),
  loadFavouriteMovies: () => (dispatch, getState, api) => (
    api.get(EntryPoint.FAVORITES)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.getFavouriteMovies(response.data
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
};

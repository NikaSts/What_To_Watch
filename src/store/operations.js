import {getMovies, getPromoMovie, requireAuthorization} from './actions';
import {AuthorizationStatus} from '../utils/consts';
import {movieAdapter} from '../adapter/movie-adapter';

export const DataOperation = {
  loadMovies: () => (dispatch, getState, api) => (
    api.get(`/films`)
      .then((response) => {
        dispatch(getMovies(response.data.map((movie) => movieAdapter(movie))
        ));
      }
      )),

  loadPromoMovie: () => (dispatch, getState, api) => (
    api.get(`/films/promo`)
    .then((response) => {
      dispatch(getPromoMovie(response.data));
    })
  ),
};

export const UserOperation = {
  checkAuth: () => (dispatch, getState, api) => (
    api.get(`/login`)
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
      .catch((err) => {
        throw err;
      })
  ),
};

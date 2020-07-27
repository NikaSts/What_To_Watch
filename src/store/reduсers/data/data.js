import {ActionType, EntryPoint} from '../../../utils/consts';
import {extend} from '../../../utils/funcs';
import {movieAdapter} from '../../../adapter/movie-adapter';

const initialState = {
  movies: [],
  promoMovie: {},
  activeMovie: null,
};

export const DataActionCreator = {
  getMovies: (movies) => ({
    type: ActionType.GET_MOVIES,
    payload: {movies},
  }),
  getPromoMovie: (promoMovie) => ({
    type: ActionType.GET_PROMO_MOVIE,
    payload: {promoMovie},
  }),
  changeActiveMovie: (activeMovie) => ({
    type: ActionType.CHANGE_ACTIVE_MOVIE,
    payload: {activeMovie},
  }),
};

export const DataOperation = {
  loadMovies: () => (dispatch, getState, api) => (
    api.get(`/films`)
      .then((response) => {
        dispatch(DataActionCreator.getMovies(response.data.map((movie) => movieAdapter(movie))
        ));
      }
      )),
  loadPromoMovie: () => (dispatch, getState, api) => (
    api.get(EntryPoint.PROMO)
      .then((response) => {
        dispatch(DataActionCreator.getPromoMovie(movieAdapter(response.data)));
      })
  ),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return extend(state, {
        movies: action.payload.movies,
      });
    case ActionType.GET_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload.promoMovie,
      });
    case ActionType.CHANGE_ACTIVE_MOVIE:
      return extend(state, {
        activeMovie: action.payload.activeMovie,
      });
    default:
      return state;
  }
};

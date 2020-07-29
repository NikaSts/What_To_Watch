import {ActionType, EntryPoint} from '../../utils/consts';
import {extend} from '../../utils/funcs';
import {movieAdapter} from '../../adapter/movie-adapter';

const initialState = {
  movies: [],
  promoMovie: {
    title: `Loading`,
    genre: ``,
    releaseDate: 0,
    poster: ``,
    backgroundImage: ``,
    backgroundColor: ``,
  },
  activeMovie: null,
  reviews: [],
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
  getReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: {reviews},
  }),
};

export const DataOperation = {
  loadMovies: () => (dispatch, getState, api) => (
    api.get(EntryPoint.MOVIES)
      .then((response) => {
        dispatch(DataActionCreator.getMovies(response.data.map((movie) => movieAdapter(movie))
        ));
      })
  ),
  loadPromoMovie: () => (dispatch, getState, api) => (
    api.get(EntryPoint.PROMO)
      .then((response) => {
        dispatch(DataActionCreator.getPromoMovie(movieAdapter(response.data)));
      })
  ),
  loadReviews: (movieId) => (dispatch, getState, api) => (
    api.get(`${EntryPoint.REVIEWS}/${movieId}`)
      .then((response) => {
        dispatch(DataActionCreator.getReviews(response.data));
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
    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload.reviews,
      });
    default:
      return state;
  }
};

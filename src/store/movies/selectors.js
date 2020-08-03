import NameSpace from '../name-space';
import {getGenresFromMovies, getMovieById} from '../../utils/funcs';

const getMoviesState = (state) => state[NameSpace.MOVIES];
export const getMovies = (state) => getMoviesState(state).movies;
export const getPromoMovie = (state) => getMoviesState(state).promoMovie;
export const getActiveMovie = (state) => getMoviesState(state).activeMovie;
export const getReviews = (state) => getMoviesState(state).reviews;

export const getGenres = (state) => getGenresFromMovies(getMovies(state));

export const getMovie = (state, id) => {
  return getMovieById(getMovies(state), id);
};

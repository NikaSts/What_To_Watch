
import {ActionType} from '../utils/consts';
import {filterMovies} from '../utils/funcs';
import {movies} from '../mocks/movies';

export const changeActiveGenre = (activeGenre) => ({
  type: ActionType.CHANGE_ACTIVE_GENRE,
  payload: activeGenre,
});

export const getMoviesByGenre = (genre) => ({
  type: ActionType.GET_MOVIES_BY_GENRE,
  payload: filterMovies(movies, genre),
});

export const incrementShownMoviesCount = () => ({
  type: ActionType.INCREMENT_SHOWN_MOVIES_COUNT,
});

export const setDefaultShownMoviesCount = () => ({
  type: ActionType.SET_DEFAULT_SHOWN_MOVIES_COUNT,
});

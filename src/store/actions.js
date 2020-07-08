
import {ActionType} from '../utils/consts';
import {getMoviesToShow} from '../utils/funcs';
import {movies} from '../mocks/movies';

export const changeActiveGenre = (activeGenre) => ({
  type: ActionType.CHANGE_ACTIVE_GENRE,
  payload: activeGenre,
});

export const getMoviesByGenre = (genre) => ({
  type: ActionType.GET_MOVIES_BY_GENRE,
  payload: getMoviesToShow(movies, genre),
});

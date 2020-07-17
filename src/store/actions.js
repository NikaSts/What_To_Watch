
import {ActionType} from '../utils/consts';

export const changeActiveGenre = (activeGenre) => ({
  type: ActionType.CHANGE_ACTIVE_GENRE,
  payload: {activeGenre},
});

export const incrementShownMoviesCount = () => ({
  type: ActionType.INCREMENT_SHOWN_MOVIES_COUNT,
});

export const setDefaultShownMoviesCount = () => ({
  type: ActionType.SET_DEFAULT_SHOWN_MOVIES_COUNT,
});

export const changeActiveMovie = (activeMovie) => ({
  type: ActionType.CHANGE_ACTIVE_MOVIE,
  payload: {activeMovie},
});

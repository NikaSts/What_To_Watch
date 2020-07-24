
import {ActionType} from '../utils/consts';

export const changeActiveMovie = (activeMovie) => ({
  type: ActionType.CHANGE_ACTIVE_MOVIE,
  payload: {activeMovie},
});

export const openFullScreenPlayer = () => ({
  type: ActionType.OPEN_FULL_SCREEN_PLAYER,
});

export const closeFullScreenPlayer = () => ({
  type: ActionType.CLOSE_FULL_SCREEN_PLAYER,
});

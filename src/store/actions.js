
import {ActionType} from '../utils/consts';

export const changeActiveMovie = (activeMovie) => ({
  type: ActionType.CHANGE_ACTIVE_MOVIE,
  payload: {activeMovie},
});

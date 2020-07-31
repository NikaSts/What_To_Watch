import {ActionType} from '../../utils/consts';


export const ActionCreator = {
  openFullScreenPlayer: () => ({
    type: ActionType.OPEN_FULL_SCREEN_PLAYER,
  }),
  closeFullScreenPlayer: () => ({
    type: ActionType.CLOSE_FULL_SCREEN_PLAYER,
  })
};

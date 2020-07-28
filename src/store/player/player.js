import {extend} from '../../utils/funcs';
import {ActionType} from '../../utils/consts';

const initialState = {
  isVideoPlayer: false,
};

export const PlayerActionCreator = {
  openFullScreenPlayer: () => ({
    type: ActionType.OPEN_FULL_SCREEN_PLAYER,
  }),
  closeFullScreenPlayer: () => ({
    type: ActionType.CLOSE_FULL_SCREEN_PLAYER,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_FULL_SCREEN_PLAYER:
      return extend(state, {
        isVideoPlayer: true,
      });
    case ActionType.CLOSE_FULL_SCREEN_PLAYER:
      return extend(state, {
        isVideoPlayer: false,
      });
    default:
      return state;
  }
};

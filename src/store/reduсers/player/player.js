import {extend} from '../../../utils/funcs';
import {ActionType} from '../../../utils/consts';

export const reducer = (state, action) => {
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

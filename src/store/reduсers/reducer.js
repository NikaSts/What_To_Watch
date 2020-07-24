import {ActionType} from '../../utils/consts';
import {extend} from '../../utils/funcs';


export const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_MOVIE:
      return extend(state, {
        activeMovie: action.payload.activeMovie,
      });
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

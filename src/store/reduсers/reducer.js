import {ActionType} from '../../utils/consts';
import {extend} from '../../utils/funcs';


export const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        moviesByGenre: action.payload,
      });
    default:
      return state;
  }
};

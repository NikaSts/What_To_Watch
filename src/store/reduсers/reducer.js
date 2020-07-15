import {ActionType, MOVIES_TO_SHOW_COUNT} from '../../utils/consts';
import {extend} from '../../utils/funcs';


export const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload.activeGenre,
      });
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        moviesByGenre: action.payload.moviesByGenre,
      });
    case ActionType.INCREMENT_SHOWN_MOVIES_COUNT:
      return extend(state, {
        shownMoviesCount: state.shownMoviesCount + MOVIES_TO_SHOW_COUNT,
      });
    case ActionType.SET_DEFAULT_SHOWN_MOVIES_COUNT:
      return extend(state, {
        shownMoviesCount: MOVIES_TO_SHOW_COUNT,
      });
    case ActionType.CHANGE_ACTIVE_MOVIE:
      return extend(state, {
        activeMovie: action.payload.activeMovie,
      });
    default:
      return state;
  }
};

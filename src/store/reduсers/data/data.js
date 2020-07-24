import {ActionType} from '../../../utils/consts';
import {extend} from '../../../utils/funcs';

const initialState = {
  movies: [],
  promoMovie: {},
  activeMovie: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload.movies,
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload.promoMovie,
      });
    case ActionType.CHANGE_ACTIVE_MOVIE:
      return extend(state, {
        activeMovie: action.payload.activeMovie,
      });
    default:
      return state;
  }
};

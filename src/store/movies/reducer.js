import {ActionType} from '../../utils/consts';
import {extend} from '../../utils/funcs';

const initialState = {
  movies: [],
  promoMovie: {
    id: 0,
    title: `Loading...`,
    genre: ``,
    releaseDate: 0,
    poster: ``,
    backgroundImage: ``,
    backgroundColor: ``,
  },
  reviews: [],
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return extend(state, {
        movies: action.payload.movies,
      });
    case ActionType.GET_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload.promoMovie,
      });
    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload.reviews,
      });
    default:
      return state;
  }
};

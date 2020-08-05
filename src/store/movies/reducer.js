import {ActionType} from '../../utils/consts';
import {extend} from '../../utils/funcs';

const initialState = {
  movies: [],
  favoriteMovies: [],
  promoMovie: {
    id: 0,
    title: ``,
    genre: ``,
    releaseDate: 0,
    poster: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    isFavorite: false,
  },
  reviews: [],
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return extend(state, {
        movies: action.payload.movies,
      });
    case ActionType.GET_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload.favoriteMovies,
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


import {ActionType} from '../utils/consts';

export const changeActiveMovie = (activeMovie) => ({
  type: ActionType.CHANGE_ACTIVE_MOVIE,
  payload: {activeMovie},
});

export const getMovies = (movies) => ({
  type: ActionType.GET_MOVIES,
  payload: {movies},
});

export const getPromoMovie = (promoMovie) => ({
  type: ActionType.GET_PROMO_MOVIE,
  payload: {promoMovie},
});

export const openFullScreenPlayer = () => ({
  type: ActionType.OPEN_FULL_SCREEN_PLAYER,
});

export const closeFullScreenPlayer = () => ({
  type: ActionType.CLOSE_FULL_SCREEN_PLAYER,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: {status},
});

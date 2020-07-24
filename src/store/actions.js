
import {ActionType} from '../utils/consts';

export const changeActiveMovie = (activeMovie) => ({
  type: ActionType.CHANGE_ACTIVE_MOVIE,
  payload: {activeMovie},
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: {movies},
});

export const loadPromoMovie = (promoMovie) => ({
  type: ActionType.LOAD_PROMO_MOVIE,
  payload: {promoMovie},
});

export const openFullScreenPlayer = () => ({
  type: ActionType.OPEN_FULL_SCREEN_PLAYER,
});

export const closeFullScreenPlayer = () => ({
  type: ActionType.CLOSE_FULL_SCREEN_PLAYER,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: {status},
});

export enum Tab {
  OVERVIEW = `Overview`,
  REVIEWS = `Reviews`,
  DETAILS = `Details`,
}

export const tabs: Array<string> = [Tab.OVERVIEW, Tab.REVIEWS, Tab.DETAILS];

export const DEFAULT_GENRE = `All genres`;

export const MOVIES_TO_SHOW_COUNT = 8;
export const MAX_GENRES_TO_SHOW = 10;
export const MAX_SIMILAR_MOVIES = 4;
export const MAX_ACTORS_TO_SHOW = 4;

export enum Rating {
  BAD = `Bad`,
  NORMAL = `Normal`,
  GOOD = `Good`,
  VERY_GOOD = `Very good`,
  AWESOME = `Awesome`,
}

export enum Score {
  BAD = 60,
  NORMAL = 70,
  GOOD = 80,
  VERY_GOOD = 90,
  AWESOME = 100,
}

export const DELAY = 1000;

export enum ActionType {
  GET_MOVIES = `getMovies`,
  GET_FAVORITE_MOVIES = `getFavoriteMovies`,
  GET_PROMO_MOVIE = `getPromoMovie`,
  GET_REVIEWS = `getReviews`,
  REQUIRE_AUTHORIZATION = `requireAuthorization`,
  IS_AUTHORIZATION_ERROR = `isAuthorizationError`,
  LOAD_USER = `loadUser`,
  SET_LOADING_STATUS = `setLoadingStatus`,
  SET_SENDING_STATUS = `setSendingStatus`,
  SET_ERROR_STATUS = `setErrorStatus`,
  CHANGE_CURRENT_PAGE = `changeCurrentPage`,
  UPDATE_MOVIE = `updateMovie`,
}

export enum AuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`,
}

export enum EntryPoint {
  REVIEWS = `/wtw/comments`,
  FAVORITES = `/wtw/favorite`,
  MOVIES = `/wtw/films`,
  PROMO = `/wtw/films/promo`,
  LOGIN = `/wtw/login`,
}

export const TIMER = 5000;

export enum Error {
  UNAUTHORIZED = 401,
}

export const URL = `https://5.react.pages.academy`;

export enum AppRoute {
  ROOT = `/`,
  LOGIN = `/login`,
  MY_LIST = `/mylist`,
  MOVIE_PAGE = `/films`,
  PLAYER = `/player`,
  REVIEW = `/review`,
}

export const TEXTAREA_COLOR = `rgba(255, 255, 255, 0.3)`;

export enum Page {
  MAIN = `main`,
  SIGN_IN = `login`,
  MY_LIST = `myList`,
  MOVIE_PAGE = `movie`,
  PLAYER = `player`,
  REVIEW = `review`,
  ERROR = `error`,
}

export enum ReviewLength {
  MIN = 50,
  MAX = 400,
}

export const SEGMENTS_COUNT = 13;

export const MACHINE_READABLE_FORMAT = `YYYY-MM-DD`;
export const HUMAN_READABLE_FORMAT = `LL`;

export const DEFAULT_RATING = 0;

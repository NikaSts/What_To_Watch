export const Tab = {
  OVERVIEW: `Overview`,
  REVIEWS: `Reviews`,
  DETAILS: `Details`,
};

export const tabs = [Tab.OVERVIEW, Tab.REVIEWS, Tab.DETAILS];

export const DEFAULT_GENRE = `All genres`;

export const MOVIES_TO_SHOW_COUNT = 8;
export const MAX_GENRES_TO_SHOW = 10;
export const MAX_SIMILAR_MOVIES = 4;
export const MAX_ACTORS_TO_SHOW = 4;

export const Rating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const Score = {
  BAD: 60,
  NORMAL: 70,
  GOOD: 80,
  VERY_GOOD: 90,
  AWESOME: 100,
};

export const DELAY = 1000;

export const ActionType = {
  OPEN_FULL_SCREEN_PLAYER: `openFullScreenPlayer`,
  CLOSE_FULL_SCREEN_PLAYER: `closeFullScreenPlayer`,
  GET_MOVIES: `getMovies`,
  GET_PROMO_MOVIE: `getPromoMovie`,
  GET_REVIEWS: `getReviews`,
  REQUIRE_AUTHORIZATION: `requireAuthorization`,
  IS_AUTHORIZING: `isAuthorizing`,
  IS_NOT_AUTHORIZING: `isNotAuthorizing`,
  IS_AUTHORIZATION_ERROR: `isAuthorizationError`,
  LOAD_USER_DATA: `loadUserData`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const EntryPoint = {
  REVIEWS: `/wtw/comments`,
  FAVORITE: `/wtw/favorite`,
  MOVIES: `/wtw/films`,
  PROMO: `/wtw/films/promo`,
  LOGIN: `/wtw/login`,
};

export const TIMER = 5000;

export const Error = {
  UNAUTHORIZED: 401,
};

export const URL = `https://4.react.pages.academy`;

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE_PAGE: `/films`,
};

export const TEXTAREA_COLOR = `rgba(255, 255, 255, 0.3)`;

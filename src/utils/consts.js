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
  CHANGE_ACTIVE_MOVIE: `changeActiveMovie`,
  OPEN_FULL_SCREEN_PLAYER: `openFullScreenPlayer`,
  CLOSE_FULL_SCREEN_PLAYER: `closeFullScreenPlayer`,
  GET_MOVIES: `getMovies`,
  GET_PROMO_MOVIE: `getPromoMovie`,
  REQUIRE_AUTHORIZATION: `requireAuthorization`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const EntryPoint = {
  FAVORITE: `/favorite`,
  MOVIES: `/films`,
  PROMO: `/films/promo`,
};

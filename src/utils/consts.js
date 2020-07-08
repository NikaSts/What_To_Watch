export const Tab = {
  OVERVIEW: `Overview`,
  REVIEWS: `Reviews`,
  DETAILS: `Details`,
};

export const tabs = [Tab.OVERVIEW, Tab.REVIEWS, Tab.DETAILS];

export const DEFAULT_GENRE = `All genres`;

export const MAX_GENRES_TO_SHOW = 10;
export const MAX_MOVIES_TO_SHOW = 8;
export const MAX_SIMILAR_MOVIES = 4;

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
  CHANGE_ACTIVE_GENRE: `changeActiveGenre`,
  GET_MOVIES_BY_GENRE: `filterMoviesByGenre`,
};

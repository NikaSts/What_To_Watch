
import {DEFAULT_GENRE, Rating, Score} from './consts';
import {MovieType} from '../types';

interface ExtendInterface {
    <T>(state: T, newStateValue: T): T;
}

export const extend: ExtendInterface = (state, newStateValue) => {
  return Object.assign({}, state, newStateValue);
};

export const getRatingLevel = (score: number) => {
  if (score < Score.BAD) {
    return Rating.BAD;
  }
  if (score < Score.NORMAL) {
    return Rating.NORMAL;
  }
  if (score < Score.GOOD) {
    return Rating.GOOD;
  }
  if (score < Score.VERY_GOOD) {
    return Rating.VERY_GOOD;
  }
  return Rating.AWESOME;
};

export const filterMovies = (movies: Array<MovieType>, activeGenre: string = DEFAULT_GENRE) => {
  if (activeGenre === DEFAULT_GENRE) {
    return [...movies];
  }
  return [...movies].filter((movie) => movie.genre === activeGenre);
};

export const getGenresFromMovies = (movies: Array<MovieType>) => {
  return [DEFAULT_GENRE, ...new Set(movies.map((movie) => movie.genre))];
};

export const getMovieById = (movies: Array<MovieType>, id: number) => {
  return movies.find((movie) => movie.id === id);
};

export const formatTimeWithSeconds = (time: number) => {
  const minutes = Math.trunc(time / 60);
  const seconds = Math.trunc(time % 60);
  const hours = Math.trunc(minutes / 60);

  return [
    (`0` + hours).slice(-2),
    (`0` + minutes).slice(-2),
    (`0` + seconds).slice(-2)
  ].join(`:`);
};

export const formatTime = (time: number) => {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;

  if (hours) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

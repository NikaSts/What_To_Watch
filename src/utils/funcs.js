
import {DEFAULT_GENRE, Rating, Score} from './consts';

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomItem = (items) => {
  return items[getRandomNumber(0, items.length)];
};

export const getUrlFromTitle = (title) => {
  return title
    .toLowerCase()
    .split(` `)
    .join(`-`);
};

export const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

export const getRandomItems = (items) => {
  const result = [];
  [...items].forEach((item) => {
    if (getRandomBoolean()) {
      result.push(item);
    }
  });
  return result;
};

export const suffleItems = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = items[randomIndex];
    items[randomIndex] = items[i];
    items[i] = temp;
  }
  return items;
};

export const getRatingLevel = (score) => {
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

export const filterMovies = (movies, activeGenre, movieTitle) => {
  if (activeGenre === DEFAULT_GENRE) {
    return [...movies];
  }
  return [...movies].filter((movie) => movie.genre === activeGenre && movie.title !== movieTitle);
};

export const getGenres = (movies) => {
  return [DEFAULT_GENRE, ...new Set(movies.map((movie) => movie.genre))];
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatTime = (time) => {
  const minutes = Math.trunc(time / 60);
  const seconds = Math.trunc(time % 60);
  const hours = Math.trunc(minutes / 60);

  return [
    (`0` + hours).slice(-2),
    (`0` + minutes).slice(-2),
    (`0` + seconds).slice(-2)
  ].join(`:`);
};


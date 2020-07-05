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

export const getMoviesToShow = (movies, activeGenre) => {
  if (activeGenre === DEFAULT_GENRE) {
    return [...movies];
  }
  return [...movies].filter((movie) => movie.genre === activeGenre);
};

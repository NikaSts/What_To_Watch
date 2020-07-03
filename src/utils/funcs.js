import {defaultGenre} from './consts';

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
  if (score < 10) {
    return `The worst`;
  }
  if (score < 30) {
    return `Very bad`;
  }
  if (score < 50) {
    return `Bad`;
  }
  if (score < 70) {
    return `Not bad`;
  }
  if (score < 80) {
    return `Good`;
  }
  if (score < 90) {
    return `Very good`;
  }
  return `Excelent`;
};

export const getMoviesToShow = (movies, activeGenre) => {
  if (activeGenre === defaultGenre) {
    return movies;
  }
  return movies.filter((movie) => movie.genre === activeGenre);
};

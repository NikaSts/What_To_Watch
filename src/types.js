import {string, number, shape, arrayOf} from 'prop-types';

export const movieType = shape({
  id: string.isRequired,
  title: string.isRequired,
  runTime: string.isRequired,
  genre: string.isRequired,
  releaseDate: number.isRequired,
  image: string.isRequired,
  ratingScore: string.isRequired,
  ratingLevel: string.isRequired,
  ratingCount: number.isRequired,
  paragraphs: arrayOf(string).isRequired,
  director: string.isRequired,
  stars: arrayOf(string).isRequired,
  preview: string.isRequired,
});

export const promoMovieType = shape({
  id: string.isRequired,
  title: string.isRequired,
  genre: string.isRequired,
  releaseDate: number.isRequired,
  image: string.isRequired,
});

export const cardMovieType = shape({
  title: string.isRequired,
  image: string.isRequired,
});

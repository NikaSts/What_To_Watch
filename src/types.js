import {string, number, shape, arrayOf, bool} from 'prop-types';

export const movieType = shape({
  id: number.isRequired,
  title: string.isRequired,
  runTime: number.isRequired,
  genre: string.isRequired,
  releaseDate: number.isRequired,
  poster: string.isRequired,
  previewImage: string.isRequired,
  backgroundImage: string.isRequired,
  backgroundColor: string.isRequired,
  ratingScore: number.isRequired,
  ratingCount: number.isRequired,
  description: string.isRequired,
  director: string.isRequired,
  stars: arrayOf(string).isRequired,
  preview: string.isRequired,
  isFavorite: bool,
});

export const promoMovieType = shape({
  title: string.isRequired,
  genre: string.isRequired,
  releaseDate: number.isRequired,
  poster: string.isRequired,
  backgroundImage: string.isRequired,
  backgroundColor: string.isRequired,
});

export const cardMovieType = shape({
  title: string.isRequired,
  previewImage: string.isRequired,
});

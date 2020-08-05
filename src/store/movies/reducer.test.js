import {reducer} from './reducer';
import {ActionType} from '../../utils/consts';

const promoMovie = {
  id: 1,
  title: `Promo Movie`,
  runTime: 1,
  genre: ``,
  releaseDate: 1,
  poster: ``,
  previewImage: ``,
  backgroundImage: ``,
  backgroundColor: ``,
  ratingScore: 1,
  ratingLevel: ``,
  ratingCount: 1,
  description: ``,
  director: ``,
  stars: [``],
  preview: ``,
  video: ``
};

const movies = [
  {
    id: 3,
    title: `First Movie`,
    runTime: 1,
    genre: ``,
    releaseDate: 1,
    poster: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    ratingScore: 1,
    ratingLevel: ``,
    ratingCount: 1,
    description: ``,
    director: ``,
    stars: [``],
    preview: ``,
    video: ``
  },
  {
    id: 4,
    title: `Second Movie`,
    runTime: 1,
    genre: ``,
    releaseDate: 1,
    poster: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    ratingScore: 1,
    ratingLevel: ``,
    ratingCount: 1,
    description: ``,
    director: ``,
    stars: [``],
    preview: ``,
    video: ``
  },
];
const favoriteMovies = [
  {
    id: 3,
    title: `First Movie`,
    runTime: 1,
    genre: ``,
    releaseDate: 1,
    poster: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    ratingScore: 1,
    ratingLevel: ``,
    ratingCount: 1,
    description: ``,
    director: ``,
    stars: [``],
    preview: ``,
    video: ``
  },
  {
    id: 4,
    title: `Second Movie`,
    runTime: 1,
    genre: ``,
    releaseDate: 1,
    poster: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    ratingScore: 1,
    ratingLevel: ``,
    ratingCount: 1,
    description: ``,
    director: ``,
    stars: [``],
    preview: ``,
    video: ``
  },
];
const reviews = [{
  id: 1,
  user: {
    id: 1,
    name: ``},
  rating: 1,
  comment: ``,
  date: ``
},
];

it(`Movies Reducer without additional parameters should return initialState`, () => {
  expect(reducer(void 0, {}))
    .toEqual({
      movies: [],
      favoriteMovies: [],
      promoMovie: {
        id: 0,
        title: ``,
        genre: ``,
        releaseDate: 0,
        poster: ``,
        backgroundImage: ``,
        backgroundColor: ``,
        isFavorite: false,
      },
      reviews: [],
    });
});


it(`Movies Reducer should update movies`, () => {
  expect(reducer({
    movies: [],
  }, {
    type: ActionType.GET_MOVIES,
    payload: {movies}
  }))
    .toEqual({
      movies,
    });
});

it(`Movies Reducer should update favourite movies`, () => {
  expect(reducer({
    favoriteMovies: [],
  }, {
    type: ActionType.GET_FAVORITE_MOVIES,
    payload: {favoriteMovies}
  }))
    .toEqual({
      favoriteMovies,
    });
});

it(`Movies Reducer should update promo movie`, () => {
  expect(reducer({
    promoMovie: {},
  }, {
    type: ActionType.GET_PROMO_MOVIE,
    payload: {promoMovie},
  }))
    .toEqual({
      promoMovie,
    });
});

it(`Movies Reducer should update reviews`, () => {
  expect(reducer({
    reviews: [],
  },
  {
    type: ActionType.GET_REVIEWS,
    payload: {reviews},
  }))
    .toEqual({
      reviews,
    });
});

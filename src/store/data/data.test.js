import {reducer} from './data';
import {ActionType} from '../../utils/consts';

const movie = {
  id: 1,
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

it(`Data Reducer without additional parameters should return initialState`, () => {
  expect(reducer(void 0, {})).toEqual({
    movies: [],
    promoMovie: {},
    activeMovie: null,
    reviews: [],
  });
});

it(`Data Reducer should update activeMovie`, () => {
  expect(reducer(
      {activeMovie: {}},
      {
        type: ActionType.CHANGE_ACTIVE_MOVIE,
        payload: {activeMovie: movie},
      }
  ))
    .toEqual({
      activeMovie: movie,
    });
});

it(`Data Reducer should update movies`, () => {
  expect(reducer({
    movies: [],
  }, {
    type: ActionType.GET_MOVIES,
    payload: {movies}
  })).toEqual({
    movies,
  });
});

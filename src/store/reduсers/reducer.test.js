import {reducer} from './reducer';
import {ActionType} from '../../utils/consts';
import {filterMovies} from '../../utils/funcs';

const movies = [
  {
    id: `1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
  },
  {
    id: `2`,
    title: `Bohemian Rhapsody`,
    genre: `Documentary`,
  },
  {
    id: `3`,
    title: `Macbeth`,
    genre: `Horror`,
  },
  {
    id: `4`,
    title: `Aviator`,
    genre: `Documentary`,
  },
  {
    id: `5`,
    title: `We need to talk about Kevin`,
    genre: `Crime`,
  },
];

const activeGenre = `Documentary`;
const moviesByGenre = filterMovies(movies, activeGenre);

it(`Reducer without state and actions should return undefined`, () => {
  expect(reducer(void 0, {})).toEqual(undefined);
});

it(`Reducer should update genre`, () => {
  expect(reducer(
      {activeGenre: `Horror`},
      {
        type: ActionType.CHANGE_ACTIVE_GENRE,
        payload: activeGenre,
      }
  ))
    .toEqual({
      activeGenre,
    });
});

it(`Reducer should update moviesByGenre`, () => {
  expect(reducer(
      {moviesByGenre: movies},
      {
        type: ActionType.GET_MOVIES_BY_GENRE,
        payload: filterMovies(movies, activeGenre),
      }
  ))
    .toEqual({
      moviesByGenre,
    });
});

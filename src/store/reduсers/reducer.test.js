import {reducer} from './reducer';
import {ActionType} from '../../utils/consts';

const movie = {
  id: `fgt`,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingCount: 240,
  paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
  presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy,
  becomes Gustave's friend and protege.`, `Gustave prides himself on providing
  first-class service to the hotel's guests, including satisfying the sexual needs
  of the many elderly women who stay there. When one of Gustave's lovers dies
  mysteriously, Gustave finds himself the recipient of a priceless painting and the
  chief suspect in her murder.`],
  director: `Wes Andreson`,
  stars: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
};

it(`Reducer without state and actions should return undefined`, () => {
  expect(reducer(void 0, {})).toEqual(undefined);
});

it(`Reducer should change genre`, () => {
  expect(reducer(
      {activeGenre: `Horror`},
      {
        type: ActionType.CHANGE_ACTIVE_GENRE,
        payload: {activeGenre: `Documentary`},
      }
  ))
    .toEqual({
      activeGenre: `Documentary`,
    });
});

it(`Reducer should change activeMovie`, () => {
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

it(`Reducer should update shownMoviesCount`, () => {
  expect(reducer(
      {shownMoviesCount: 8},
      {
        type: ActionType.INCREMENT_SHOWN_MOVIES_COUNT,
      }
  ))
    .toEqual({
      shownMoviesCount: 16,
    });
});

it(`Reducer should set default shownMoviesCount`, () => {
  expect(reducer(
      {shownMoviesCount: 20},
      {
        type: ActionType.SET_DEFAULT_SHOWN_MOVIES_COUNT,
      }
  ))
    .toEqual({
      shownMoviesCount: 8,
    });
});

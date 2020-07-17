import {reducer} from './reducer';
import {ActionType} from '../../utils/consts';

const activeGenre = `Documentary`;

it(`Reducer without state and actions should return undefined`, () => {
  expect(reducer(void 0, {})).toEqual(undefined);
});

it(`Reducer should update genre`, () => {
  expect(reducer(
      {activeGenre: `Horror`},
      {
        type: ActionType.CHANGE_ACTIVE_GENRE,
        payload: {activeGenre},
      }
  ))
    .toEqual({
      activeGenre,
    });
});

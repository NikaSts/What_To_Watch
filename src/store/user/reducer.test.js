import {reducer} from './reducer';
import {ActionType} from '../../utils/consts';

const status = `AUTH`;
const isAuthorizationError = true;
const user = {
  id: 1,
  name: `Dan`,
  email: `mail@mail.com`,
  avatar: `pic.png`,
};

it(`User Reducer should update authorizationStatus`, () => {
  expect(reducer({
    authorizationStatus: `NO_AUTH`,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: {status}
  }))
    .toEqual({
      authorizationStatus: status,
    });
});

it(`User Reducer should update isAuthorizationError`, () => {
  expect(reducer({
    isAuthorizationError: false,
  }, {
    type: ActionType.IS_AUTHORIZATION_ERROR,
    payload: {isAuthorizationError}
  }))
    .toEqual({
      isAuthorizationError,
    });
});

it(`User Reducer should update userData`, () => {
  expect(reducer({
    user: {},
  }, {
    type: ActionType.LOAD_USER,
    payload: {user}
  }))
    .toEqual({
      user,
    });
});

import {AuthorizationStatus} from '../../../utils/consts';
import {ActionType} from '../../../utils/consts';
import {extend} from '../../../utils/funcs';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const UserActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: {status},
  })
};

export const UserOperation = {
  checkAuth: () => (dispatch, getState, api) => (
    api.get(`/login`)
      .then(() => dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
      .catch((err) => {
        throw err;
      })
  ),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
};

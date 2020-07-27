import {AuthorizationStatus} from '../../../utils/consts';
import {ActionType} from '../../../utils/consts';
import {extend} from '../../../utils/funcs';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isAuthorizing: false,
};

export const UserActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: {status},
  }),
  isAuthorizing: () => ({
    type: ActionType.IS_AUTHORIZING,
  }),
  isNotAuthorizing: () => ({
    type: ActionType.IS_NOT_AUTHORIZING,
  }),

};

export const UserOperation = {
  checkAuth: () => (dispatch, getState, api) => (
    api.get(`/login`)
      .then(() => {
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      })
  ),

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(UserActionCreator.isNotAuthorizing());
      })
      .catch(() => {
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      });

  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload.status,
      });
    case ActionType.IS_AUTHORIZING:
      return extend(state, {
        isAuthorizing: true,
      });
    case ActionType.IS_NOT_AUTHORIZING:
      return extend(state, {
        isAuthorizing: false,
      });
    default:
      return state;
  }
};

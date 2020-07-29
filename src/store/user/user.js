import {AuthorizationStatus} from '../../utils/consts';
import {ActionType} from '../../utils/consts';
import {extend} from '../../utils/funcs';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isAuthorizing: false,
  isAuthorizationError: false,
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
  isAuthorizationError: () => ({
    type: ActionType.IS_AUTHORIZATION_ERROR,
  })
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
        dispatch(UserActionCreator.isAuthorizationError());
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
        isAuthorizationError: false,
      });
    case ActionType.IS_AUTHORIZATION_ERROR:
      return extend(state, {
        isAuthorizationError: true,
      });
    default:
      return state;
  }
};

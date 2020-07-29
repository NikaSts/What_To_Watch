import {AuthorizationStatus} from '../../utils/consts';
import {ActionType} from '../../utils/consts';
import {extend} from '../../utils/funcs';
import {userAdapter} from '../../adapter/user-adapter';

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
  }),
  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: {userData},
  })
};

export const UserOperation = {
  checkAuth: () => (dispatch, getState, api) => (
    api.get(`/login`)
      .then((response) => {
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(UserActionCreator.loadUserData(userAdapter(response.data)));
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
      .then((response) => {
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(UserActionCreator.isNotAuthorizing());
        dispatch(UserActionCreator.loadUserData(userAdapter(response.data)));
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
    case ActionType.LOAD_USER_DATA:
      return extend(state, {
        userData: action.payload.userData,
      });
    default:
      return state;
  }
};

import {ActionType} from '../../utils/consts';
import {userAdapter} from '../../adapter/user-adapter';
import {AuthorizationStatus, EntryPoint} from '../../utils/consts';


export const ActionCreator = {
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

export const Operation = {
  checkAuth: () => (dispatch, getState, api) => (
    api.get(EntryPoint.LOGIN)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.loadUserData(userAdapter(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      })
  ),
  login: (authData) => (dispatch, getState, api) => (
    api.post(EntryPoint.LOGIN, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.isNotAuthorizing());
        dispatch(ActionCreator.loadUserData(userAdapter(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        dispatch(ActionCreator.isAuthorizationError());
      })
  )
};
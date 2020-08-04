import {ActionType} from '../../utils/consts';
import {userAdapter} from '../../adapter/user-adapter';
import {AuthorizationStatus, EntryPoint} from '../../utils/consts';


export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: {status},
  }),
  isAuthorizationError: () => ({
    type: ActionType.IS_AUTHORIZATION_ERROR,
  }),
  loadUser: (user) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: {user},
  })
};

export const Operation = {
  checkAuth: () => (dispatch, getState, api) => (
    api.get(EntryPoint.LOGIN)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.loadUser(userAdapter(response.data)));
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
        dispatch(ActionCreator.loadUser(userAdapter(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      })
  )
};

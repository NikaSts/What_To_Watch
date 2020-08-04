import {AuthorizationStatus} from '../../utils/consts';
import {ActionType} from '../../utils/consts';
import {extend} from '../../utils/funcs';


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isAuthorizing: false,
  isAuthorizationError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload.status,
      });
    case ActionType.IS_AUTHORIZATION_ERROR:
      return extend(state, {
        isAuthorizationError: true,
      });
    case ActionType.LOAD_USER_DATA:
      return extend(state, {
        user: action.payload.user,
      });
    default:
      return state;
  }
};

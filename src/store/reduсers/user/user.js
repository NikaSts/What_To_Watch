import {AuthorizationStatus} from '../../../utils/consts';
import {ActionType} from '../../../utils/consts';
import {extend} from '../../../utils/funcs';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
};

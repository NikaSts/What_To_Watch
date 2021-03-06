import {ActionType} from '../../utils/consts';
import {extend} from '../../utils/funcs';

const initialState = {
  isLoading: true,
  isSending: false,
  isErrorStatus: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOADING_STATUS:
      return extend(state, {
        isLoading: action.payload.isLoading,
      });
    case ActionType.SET_SENDING_STATUS:
      return extend(state, {
        isSending: action.payload.isSending,
      });
    case ActionType.SET_ERROR_STATUS:
      return extend(state, {
        isErrorStatus: action.payload.isErrorStatus,
      });
    default:
      return state;
  }
};

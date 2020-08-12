import {ActionType} from '../../utils/consts';

export const ActionCreator = {
  setLoadingStatus: (isLoading) => ({
    type: ActionType.SET_LOADING_STATUS,
    payload: {isLoading},
  }),
  setSendingStatus: (isSending) => ({
    type: ActionType.SET_SENDING_STATUS,
    payload: {isSending},
  }),
  setErrorStatus: (isErrorStatus) => ({
    type: ActionType.SET_ERROR_STATUS,
    payload: {isErrorStatus},
  }),
};

import NameSpace from '../name-space';

const getAppState = (state) => state[NameSpace.APP_STATE];

export const getLoadingStatus = (state) => getAppState(state).isLoading;
export const getErrorStatus = (state) => getAppState(state).isErrorStatus;
export const getSendingStatus = (state) => getAppState(state).isSending;
export const getPage = (state) => getAppState(state).page;

import NameSpace from '../name-space';

const getUserState = (state) => state[NameSpace.USER];

export const getAuthorizationStatus = (state) => getUserState(state).authorizationStatus;
export const getIsAuthorizationError = (state) => getUserState(state).isAuthorizationError;
export const getUserData = (state) => getUserState(state).userData;

import NameSpace from '../name-space';


export const getAuthorizationStatus = (store) => store[NameSpace.USER].authorizationStatus;

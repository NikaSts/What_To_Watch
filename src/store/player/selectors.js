import NameSpace from '../name-space';

const getPlayerState = (state) => state[NameSpace.PLAYER];
export const checkPlayerStatus = (state) => getPlayerState(state).isVideoPlayer;

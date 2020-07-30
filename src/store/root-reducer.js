import {combineReducers} from 'redux';
import {reducer as movies} from './movies/reducer';
import {reducer as player} from './player/reducer';
import {reducer as user} from './user/reducer';
import NameSpace from './name-space';

export const rootReducer = combineReducers({
  [NameSpace.MOVIES]: movies,
  [NameSpace.PLAYER]: player,
  [NameSpace.USER]: user,
});

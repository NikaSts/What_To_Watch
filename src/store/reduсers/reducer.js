import {combineReducers} from 'redux';
import {reducer as data} from './data/data';
import {reducer as player} from './player/player';
import {reducer as user} from './user/user';
import NameSpace from './name-space';

export const rootReducer = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PLAYER]: player,
  [NameSpace.USER]: user,
});

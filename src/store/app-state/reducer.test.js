import {reducer} from './reducer';
import {ActionType} from '../../utils/consts';

const isLoading = false;
const isSending = true;
const isErrorStatus = true;
const page = true;

it(`AppState Reducer should update isLoading`, () => {
  expect(reducer({
    isLoading: true,
  }, {
    type: ActionType.SET_LOADING_STATUS,
    payload: {isLoading}
  }))
    .toEqual({
      isLoading,
    });
});

it(`AppState Reducer should update isSending`, () => {
  expect(reducer({
    isSending: false,
  }, {
    type: ActionType.SET_SENDING_STATUS,
    payload: {isSending}
  }))
    .toEqual({
      isSending,
    });
});

it(`AppState Reducer should update isErrorStatus`, () => {
  expect(reducer({
    isErrorStatus: false,
  }, {
    type: ActionType.SET_ERROR_STATUS,
    payload: {isErrorStatus}
  }))
    .toEqual({
      isErrorStatus,
    });
});

it(`AppState Reducer should update page changing status`, () => {
  expect(reducer({
    page: false,
  }, {
    type: ActionType.CHANGE_CURRENT_PAGE,
    payload: {page}
  }))
    .toEqual({
      page,
    });
});

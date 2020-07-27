import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/app/app';
import {rootReducer} from './store/reduсers/reducer';
import {createAPI} from './api';

import {UserActionCreator} from './store/reduсers/user/user';
import {DataOperation} from './store/reduсers/data/data';
import {AuthorizationStatus} from './utils/consts';


const api = createAPI(() => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadMovies());
store.dispatch(DataOperation.loadPromoMovie());
// store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`));

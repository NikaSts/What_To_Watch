import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import {rootReducer} from './store/root-reducer';
import {createAPI} from './api';
import {ActionCreator as UserActionCreator, Operation as UserOperation} from './store/user/actions';
import {Operation as MoviesOperation} from './store/movies/actions';
import {AuthorizationStatus} from './utils/consts';


const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(MoviesOperation.loadMovies());
store.dispatch(MoviesOperation.loadPromoMovie());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`));

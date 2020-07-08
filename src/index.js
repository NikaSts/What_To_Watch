import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import {reducer} from './store/reduсers/reducer';
import {movies} from './mocks/movies';
import {promoMovie} from './mocks/promoMovie';
import {DEFAULT_GENRE} from './utils/consts';
import {getGenres} from './utils/funcs.js';

const initialState = {
  promoMovie,
  movies,
  genres: getGenres(movies),
  activeGenre: DEFAULT_GENRE,
  moviesByGenre: movies,
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`));

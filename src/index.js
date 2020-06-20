import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/components/app/app.jsx';
import {movies} from './mocks/movies.js';
import {promoMovie} from './mocks/promoMovie.js';


const root = document.querySelector(`#root`);
ReactDOM.render(<App promoMovie={promoMovie} movies={movies} />, root);

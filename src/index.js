import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/components/app/app.jsx';
import {movies, movie} from './mocks/movies.js';


const root = document.querySelector(`#root`);
ReactDOM.render(<App movie={movie} movies={movies} />, root);

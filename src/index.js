import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/app/app.jsx';


const filmDetails = {
  'title': `The Grand Budapest Hotel`,
  'genre': `Drama`,
  'releaseDate': 2014,
};


const root = document.querySelector(`#root`);
ReactDOM.render(<App filmDetails={filmDetails} />, root);

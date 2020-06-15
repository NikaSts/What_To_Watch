import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/components/app/app.jsx';


const movie = {
  'title': `The Grand Budapest Hotel`,
  'genre': `Drama`,
  'releaseDate': 2014,
};

const movieTitles = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`];

const root = document.querySelector(`#root`);
ReactDOM.render(<App movie={movie} movieTitles={movieTitles} />, root);

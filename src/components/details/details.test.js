import React from 'react';
import renderer from 'react-test-renderer';
import Details from './details';

const runTime = `1h 29m`;
const genre = `Comedy`;
const releaseDate = 2004;
const director = `Wes Andreson`;
const starring = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`];


it(`Overview should render correctly`, () => {
  const tree = renderer
    .create(
        <Details
          runTime={runTime}
          genre={genre}
          releaseDate={releaseDate}
          director={director}
          starring={starring}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

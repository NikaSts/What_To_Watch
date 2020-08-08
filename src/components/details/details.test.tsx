import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Details from './details';

const runTime = 11;
const genre = `Comedy`;
const releaseDate = 2004;
const director = `Wes Andreson`;
const stars: Array<string> = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`];


it(`Overview should render correctly`, () => {
  const tree = renderer
    .create(
        <Details
          runTime={runTime}
          genre={genre}
          releaseDate={releaseDate}
          director={director}
          stars={stars}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

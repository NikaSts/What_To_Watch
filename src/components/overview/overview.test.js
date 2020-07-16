import React from 'react';
import renderer from 'react-test-renderer';
import Overview from './overview';

const ratingScore = `8,9`;
const ratingLevel = `Very Good`;
const ratingCount = 240;
const text = [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
  presided over by concierge Gustave H. (Ralph Fiennes).`];
const director = `Wes Andreson`;
const starring = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`];


it(`Overview should render correctly`, () => {
  const tree = renderer
    .create(
        <Overview
          ratingScore={ratingScore}
          ratingLevel={ratingLevel}
          ratingCount={ratingCount}
          text={text}
          director={director}
          starring={starring}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

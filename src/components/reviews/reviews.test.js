import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews';


it(`Reviews should render correctly`, () => {
  const tree = renderer
    .create(
        <Reviews
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

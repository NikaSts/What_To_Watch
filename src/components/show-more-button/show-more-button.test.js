import React from 'react';
import renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-button';

const noop = () => { };

it(`ShowMoreButton should render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          onShowMoreButtonClick={noop}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-button';

const noop = () => {
  // Mock function for test props
};

it(`ShowMoreButton should render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          onShowMoreButtonClick={noop}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

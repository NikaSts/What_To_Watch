import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './controls';

const noop = () => {};

it(`Controls should render correctly if user is signed in`, () => {
  const tree = renderer
  .create(
      <Controls
        isSignedIn={true}
        onPlayButtonClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Controls should render correctly if user is not signed in`, () => {
  const tree = renderer
  .create(
      <Controls
        isSignedIn={false}
        onPlayButtonClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

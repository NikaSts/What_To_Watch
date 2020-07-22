import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './controls';


it(`Controls should render correctly if user is logged in`, () => {
  const tree = renderer
  .create(
      <Controls
        isLogged={true}
        onPlayButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Controls should render correctly if user is not logged in`, () => {
  const tree = renderer
  .create(
      <Controls
        isLogged={false}
        onPlayButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

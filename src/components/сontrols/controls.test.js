import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './controls';


it(`Controls should render correctly if user is logged in`, () => {
  const isLogged = true;
  const tree = renderer
  .create(
      <Controls
        isLogged={isLogged}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Controls should render correctly if user is not logged in`, () => {
  const isLogged = false;
  const tree = renderer
  .create(
      <Controls
        isLogged={isLogged}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

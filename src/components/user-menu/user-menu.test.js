import React from 'react';
import renderer from 'react-test-renderer';
import UserMenu from './user-menu';


it(`UserMenu should render correctly if user is logged in`, () => {
  const isLogged = true;
  const tree = renderer
  .create(
      <UserMenu
        isLogged={isLogged}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`UserMenu should render correctly if user is not logged in`, () => {
  const isLogged = false;
  const tree = renderer
  .create(
      <UserMenu
        isLogged={isLogged}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

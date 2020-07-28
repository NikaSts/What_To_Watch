import React from 'react';
import renderer from 'react-test-renderer';
import SignInPage from './sign-in-page';


const noop = () => {};

it(`SignInPage component render correctly`, () => {
  const tree = renderer.create(
      <SignInPage
        onSubmit={noop}
        isMain={false}
        isSignedIn={false}
        isSignInPage={true}
        onSignInButtonClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

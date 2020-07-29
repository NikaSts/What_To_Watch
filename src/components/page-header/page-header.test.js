import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './page-header';

const noop = () => { };
const userData = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};

it(`PageHeader not MainPage, not SignInPage, not authtorized should render correctly`, () => {
  const tree = renderer
    .create(
        <PageHeader
          isMain={false}
          isSignedIn={false}
          isSignInPage={false}
          onSignInButtonClick={noop}
          userData={userData}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`PageHeader not MainPage, not SignInPage, authtorized should render correctly`, () => {
  const tree = renderer
    .create(
        <PageHeader
          isMain={false}
          isSignedIn={true}
          isSignInPage={false}
          onSignInButtonClick={noop}
          userData={userData}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`PageHeader MainPage, not authtorized should render correctly`, () => {
  const tree = renderer
    .create(
        <PageHeader
          isMain={true}
          isSignedIn={false}
          isSignInPage={false}
          onSignInButtonClick={noop}
          userData={userData}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`PageHeader MainPage, authtorized should render correctly`, () => {
  const tree = renderer
    .create(
        <PageHeader
          isMain={true}
          isSignedIn={true}
          isSignInPage={false}
          onSignInButtonClick={noop}
          userData={userData}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`PageHeader SignInPage should render correctly`, () => {
  const tree = renderer
    .create(
        <PageHeader
          isMain={false}
          isSignedIn={false}
          isSignInPage={true}
          onSignInButtonClick={noop}
          userData={userData}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

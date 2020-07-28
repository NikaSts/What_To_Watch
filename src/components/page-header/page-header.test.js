import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './page-header';

const noop = () => {};

it(`PageHeader not MainPage, not SignInPage, not authtorized should render correctly`, () => {
  const tree = renderer
    .create(
        <PageHeader
          isMain={false}
          isSignedIn={false}
          isSignInPage={false}
          onSignInButtonClick={noop}
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
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

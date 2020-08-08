import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LoadingPage from './loading-page';

it(`LoadingPage should render correctly`, () => {
  const tree = renderer
    .create(
        <LoadingPage />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

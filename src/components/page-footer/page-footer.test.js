import React from 'react';
import renderer from 'react-test-renderer';
import PageFooter from './page-footer.jsx';


it(`PageFooter on MainPage should render correctly`, () => {
  const tree = renderer
    .create(
        <PageFooter
          isMain={true}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`PageFooter on MoviePage should render correctly`, () => {
  const tree = renderer
    .create(
        <PageFooter
          isMain={false}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './page-header';

const url = `src/img/pic.png`;
const title = `Kill Bill`;

it(`PageHeader should render correctly`, () => {
  const tree = renderer
    .create(
        <PageHeader
          backgroundImage={url}
          title={title}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

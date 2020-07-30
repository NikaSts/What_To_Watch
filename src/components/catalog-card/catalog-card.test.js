import React from 'react';
import renderer from 'react-test-renderer';
import CatalogCard from './catalog-card';

const title = `Harry Potter`;
const children = <video />;

it(`MovieCard should render correctly`, () => {
  const tree = renderer
    .create(
        <CatalogCard
          title={title}
          onCatalogCardClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => { }}
        >
          {children}
        </CatalogCard>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

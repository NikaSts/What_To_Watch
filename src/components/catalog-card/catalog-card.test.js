import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import CatalogCard from './catalog-card';

const title = `Harry Potter`;
const children = <video />;
const id = 1;

it(`MovieCard should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <CatalogCard
            id={id}
            title={title}
            onMouseEnter={() => {}}
            onMouseLeave={() => { }}
          >
            {children}
          </CatalogCard>
        </Router>
    )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

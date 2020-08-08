import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import CatalogCard from './catalog-card';

const title = `Harry Potter`;
const children: React.ReactNode = <video />;
const id = 1;
const noop = () => {
  // Mock function for test props
};


it(`MovieCard should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <CatalogCard
            id={id}
            title={title}
            onMouseEnter={noop}
            onMouseLeave={noop}
          >
            {children}
          </CatalogCard>
        </Router>
    )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

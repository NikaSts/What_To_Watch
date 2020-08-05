import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import PageFooter from './page-footer';


it(`PageFooter should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PageFooter />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

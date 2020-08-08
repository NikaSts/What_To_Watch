import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import BreadCrumbs from './bread-crumbs';

const id = 1;
const title = ``;

it(`Overview should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <BreadCrumbs
            id={id}
            title={title}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

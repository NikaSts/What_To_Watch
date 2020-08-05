import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import PageHeader from './page-header';
import {AppRoute} from '../../utils/consts';

const userData = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};
const children = <div></div>;

it(`PageHeader on MainPage, not authtorized should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            currentPage={AppRoute.ROOT}
            isAuth={false}
            user={userData}>
            {children}
          </PageHeader>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`PageHeader on MainPage, authtorized should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            currentPage={AppRoute.ROOT}
            isAuth={true}
            user={userData}>
            {children}
          </PageHeader>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it(`PageHeader on LoginPage, not authtorized should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            currentPage={AppRoute.LOGIN}
            isAuth={false}
            user={userData}>
            {children}
          </PageHeader>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`PageHeader on MyListPage should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            currentPage={AppRoute.MY_LIST}
            isAuth={true}
            user={userData}>
            {children}
          </PageHeader>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`PageHeader on ReviewPage should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            currentPage={AppRoute.REVIEW}
            isAuth={true}
            user={userData}>
            {children}
          </PageHeader>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

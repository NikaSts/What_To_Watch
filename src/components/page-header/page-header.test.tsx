import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import PageHeader from './page-header';
import {Page} from '../../utils/consts';
import {UserDataType} from '../../types';

const userData: UserDataType = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};
const children: React.ReactNode = <div></div>;

it(`PageHeader on MainPage, not authtorized should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            currentPage={Page.MAIN}
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
            currentPage={Page.MAIN}
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
            currentPage={Page.SIGN_IN}
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
            currentPage={Page.MY_LIST}
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
            currentPage={Page.REVIEW}
            isAuth={true}
            user={userData}>
            {children}
          </PageHeader>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

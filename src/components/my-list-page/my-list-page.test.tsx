import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {MyListPage} from './my-list-page';
import {UserDataType} from '../../types';

const mockStore = configureStore([]);

const user: UserDataType = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};
const noop = () => {
  // Mock function for test props
};

it(`MyListPage should render correctly`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `AUTH`,
      user,
      page: false,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MyListPage
              authorizationStatus={`AUTH`}
              user={user}
              loadFavoriteMovies={noop}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});

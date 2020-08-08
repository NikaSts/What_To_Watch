import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import SignInPage from './sign-in-page';

const mockStore = configureStore([]);

const noop = () => {
  // Mock function for test props
};

it(`SignInPage component render correctly`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `NO_AUTH`,
      isAuthorizationError: false,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <SignInPage
              onFormSubmit={noop}
              isAuthorizationError={false}
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

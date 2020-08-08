import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import PrivateRoute from './private-route';

const mockStore = configureStore([]);

const authorizationStatus = `NO_AUTH`;

it(`PrivateRoute should render LoginPage if user not authtorized`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <PrivateRoute
              authorizationStatus={authorizationStatus}
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

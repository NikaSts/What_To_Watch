import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {MyListPage} from './my-list-page';
import {MovieType, UserDataType} from '../../types';

const mockStore = configureStore([]);

const favoriteMovies: Array<MovieType> = [{
  id: 1,
  title: `Favorite Movie`,
  runTime: 1,
  genre: ``,
  releaseDate: 1,
  poster: ``,
  previewImage: ``,
  backgroundImage: ``,
  backgroundColor: ``,
  ratingScore: 1,
  ratingLevel: ``,
  ratingCount: 1,
  description: ``,
  director: ``,
  stars: [``],
  preview: ``,
  video: ``,
  isFavorite: true,
}];
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
    MOVIES: {
      favoriteMovies,
    },
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
              favoriteMovies={favoriteMovies}
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

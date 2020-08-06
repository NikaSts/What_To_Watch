import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {MyListPage} from './my-list-page';
import {Page} from '../../utils/consts';

const mockStore = configureStore([]);

const favoriteMovies = [
  {
    id: 3,
    title: `First Movie`,
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
    isFavorite: false,
  },
  {
    id: 4,
    title: `Second Movie`,
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
    isFavorite: false,
  },
];
const userData = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};
const noop = () => { };

it(`MyListPage should render correctly`, () => {
  const store = mockStore({
    MOVIES: {
      favoriteMovies,
    },
    USER: {
      authorizationStatus: `AUTH`,
      user: userData,
      page: false,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MyListPage
              currentPage={Page.MY_LIST}
              authorizationStatus={`AUTH`}
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

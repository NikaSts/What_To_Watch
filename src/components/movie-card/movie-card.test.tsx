import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {MovieCard} from './movie-card';
import {Page} from '../../utils/consts';
import {MovieType, UserDataType} from '../../types';

const mockStore = configureStore([]);

const promoMovie: MovieType = {
  id: 1,
  title: `Promo Movie`,
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
};
const user: UserDataType = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};
const currentPage: string = Page.MAIN;
const noop = () => {
  // Mock function for test props
};

it(`MovieCard should render correctly`, () => {
  const store = mockStore({
    MOVIES: {
      promoMovie,
    },
    USER: {
      authorizationStatus: `AUTH`,
      user,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieCard
              currentPage={currentPage}
              authorizationStatus={`AUTH`}
              promoMovie={promoMovie}
              onIsFavoriteButtonClick={noop}
              user={user}
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

import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {MovieCard} from './movie-card';
import {Page} from '../../utils/consts';

const mockStore = configureStore([]);

const promoMovie = {
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
const userData = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};
const noop = () => { };

it(`MovieCard should render correctly`, () => {
  const store = mockStore({
    MOVIES: {
      promoMovie,
    },
    USER: {
      authorizationStatus: `AUTH`,
      user: userData,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieCard
              id={1}
              currentPage={Page.MAIN}
              authorizationStatus={`AUTH`}
              promoMovie={promoMovie}
              onIsFavoriteButtonClick={noop}
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

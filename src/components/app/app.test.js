import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {App} from './app';

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
  isFavorite: false,
};
const movies = [
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
const noop = () => {};

it(`App should render MainPage`, () => {
  const store = mockStore({
    MOVIES: {
      promoMovie,
      movies,
    },
    APP_STATE: {
      isLoading: false,
      isError: false,
    },
    USER: {
      authorizationStatus: `AUTH`,
      isAuthorizing: false,
      isAuthorizationError: false,
      userData,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            isError={false}
            isLoading={false}
            // isFavorite={false}
            onFormSubmit={noop}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});

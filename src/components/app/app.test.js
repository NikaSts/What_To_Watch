import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';

const mockStore = configureStore([]);

const activeMovie = {
  id: 2,
  title: `Active Movie`,
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
  video: ``
};
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
  video: ``
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
    video: ``
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
    video: ``
  },
];
const userData = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};

it(`App should render Main`, () => {
  const store = mockStore({
    DATA: {
      activeMovie: null,
      promoMovie,
      movies,
    },
    PLAYER: {
      isVideoPlayer: false,
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
            isMain={true}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});


it(`App should render MoviePage`, () => {
  const store = mockStore({
    DATA: {
      activeMovie,
      promoMovie,
      movies,
    },
    PLAYER: {
      isVideoPlayer: false,
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
          <App />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});

/* it(`App should render VideoPlayer`, () => {
  const store = mockStore({
    activeMovie: null,
    promoMovie,
    isVideoPlayer: true,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            onMovieTitleClick={() => { }}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main';

const mockStore = configureStore([]);

const activeGenre = `All genres`;
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
const noop = () => { };
const userData = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};

it(`Main should render correctly`, () => {
  const store = mockStore({
    MOVIES: {
      promoMovie,
      movies,
    },
    USER: {
      authorizationStatus: `AUTH`,
      isAuthorizing: false,
      userData,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            activeGenre={activeGenre}
            onGenreClick={noop}
            onMovieTitleClick={noop}
            onShowMoreButtonClick={noop}
            onSignInButtonClick={noop}
            isMain={true}
            authorizationStatus={`AUTH`}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});

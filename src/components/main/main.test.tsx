import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import Main from './main';
import {MovieType, UserDataType} from '../../types';

const mockStore = configureStore([]);

const activeGenre = `All genres`;
const promoMovie: MovieType = {
  id: 2,
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
const movies: Array<MovieType> = [
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
const user: UserDataType = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};
const noop = () => {
  // Mock function for test props
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
      user,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Main
              activeGenre={activeGenre}
              onGenreClick={noop}
              onMovieTitleClick={noop}
              onShowMoreButtonClick={noop}
              onSignInButtonClick={noop}
              authorizationStatus={`AUTH`}
              isFavorite={true}
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

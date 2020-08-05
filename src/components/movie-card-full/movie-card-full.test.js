import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {MovieCardFull} from './movie-card-full';
import {Page} from '../../utils/consts';

const mockStore = configureStore([]);

const activeMovie = {
  id: 1,
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

it(`MovieCardFull should render correctly`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `AUTH`,
      user: userData,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieCardFull
              id={1}
              currentPage={Page.MOVIE_PAGE}
              authorizationStatus={`AUTH`}
              activeMovie={activeMovie}
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

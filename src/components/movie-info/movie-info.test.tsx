import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import MovieInfo from './movie-info';
import {MovieType} from '../../types';
import {Page} from '../../utils/consts';

const mockStore = configureStore([]);

const movie: MovieType = {
  id: 1,
  title: `Movie`,
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
const currentPage: string = Page.MAIN;
const noop = () => {
  // Mock function for test props
};

it(`MovieInfo should render correctly`, () => {
  const store = mockStore({
    MOVIES: {
      movie,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieInfo
              title={movie.title}
              genre={movie.genre}
              releaseDate={movie.releaseDate}
              id={movie.id}
              isFavorite={true}
              onIsFavoriteButtonClick={noop}
              currentPage={currentPage}
              isAuth={true}
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

import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import MovieInfo from './movie-info';

const mockStore = configureStore([]);

const movie = {
  title: `title`,
  genre: `genre`,
  releaseDate: 0,
  id: 1,
};
const currentPage = `main`;
const noop = () => {};

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

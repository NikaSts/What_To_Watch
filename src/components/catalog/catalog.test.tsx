import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {Catalog} from './catalog';
import {Page, DEFAULT_GENRE} from '../../utils/consts';
import {MovieType} from '../../types';

const mockStore = configureStore([]);

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
const genres: Array<string> = [`a`, `b`];
const favoriteMovies: Array<MovieType> = [{
  id: 1,
  title: `Favorite Movie`,
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
}];
const currentPage: string = Page.MAIN;
const activeItem = DEFAULT_GENRE;
const noop = () => {
  // Mock function for test props
};

it(`Catalog should render correctly`, () => {
  const store = mockStore({
    MOVIES: {
      movies,
      favoriteMovies,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Catalog
              currentPage={currentPage}
              movies={movies}
              genres={genres}
              favoriteMovies={favoriteMovies}
              activeItem={activeItem}
              onItemClick={noop}
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

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {MovieCardFull} from './movie-card-full';
import {Page} from '../../utils/consts';
import {MovieType, UserDataType, ReviewType} from '../../types';

const mockStore = configureStore([]);

const activeMovie: MovieType = {
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
const user: UserDataType = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};
const currentPage: string = Page.MOVIE_PAGE;
const reviews: Array<ReviewType> = [{
  id: 2,
  user: {
    id: 15,
    name: `Kendall`
  },
  rating: 8.7,
  comment: ``,
  date: ``
}];

const noop = () => {
  // Mock function for test props
};

it(`MovieCardFull should render correctly`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `AUTH`,
      user,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MovieCardFull
              id={1}
              currentPage={currentPage}
              authorizationStatus={`AUTH`}
              activeMovie={activeMovie}
              reviews={reviews}
              user={user}
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

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AddReview} from './add-review';
import {MovieType, UserDataType} from '../../types';


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
const userData: UserDataType = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};
const noop = () => {
  // Mock function for test props
};

it(`AddReview page should render with submit button active`, () => {
  const store = mockStore({
    MOVIES: {
      movie,
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
            <AddReview
              authorizationStatus={`AUTH`}
              id={1}
              user={userData}
              movie={movie}
              onFormSubmit={noop}
              onCommentChange={noop}
              onRatingChange={noop}
              isValid={true}
              isSending={false}
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

it(`AddReview page should render with submit button disabled`, () => {
  const store = mockStore({
    MOVIES: {
      movie,
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
            <AddReview
              authorizationStatus={`AUTH`}
              id={1}
              user={userData}
              movie={movie}
              onFormSubmit={noop}
              onCommentChange={noop}
              onRatingChange={noop}
              isValid={false}
              isSending={false}
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

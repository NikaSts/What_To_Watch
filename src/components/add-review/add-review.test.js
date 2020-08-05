import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AddReview} from './add-review';
import {Page} from '../../utils/consts';

const mockStore = configureStore([]);

const movie = {
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
const userData = {
  id: 1,
  name: ``,
  email: ``,
  avatar: ``,
};
const noop = () => { };

it(`AddReview page should render with submit button active`, () => {
  const store = mockStore({
    MOVIES: {
      movie,
    },
    USER: {
      authorizationStatus: `AUTH`,
      user: userData,
      page: false,
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
              currentPage={Page.REVIEW}
              movie={movie}
              onFormSubmit={noop}
              onCommentChange={noop}
              onRatingChange={noop}
              isValid={true}
              isSending={false}
              page={false}
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
      page: false,
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
              currentPage={Page.REVIEW}
              movie={movie}
              onFormSubmit={noop}
              onCommentChange={noop}
              onRatingChange={noop}
              isValid={false}
              isSending={false}
              page={false}
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

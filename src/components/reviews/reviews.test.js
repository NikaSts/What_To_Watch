import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Reviews from './reviews';

const mockStore = configureStore([]);

const reviews = [{
  id: 2,
  user: {
    id: 15,
    name: `Kendall`
  },
  rating: 8.7,
  comment: ``,
  date: ``
}];

it(`Reviews should render correctly`, () => {
  const store = mockStore({
    DATA: {
      reviews,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Reviews
            reviews={reviews}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});

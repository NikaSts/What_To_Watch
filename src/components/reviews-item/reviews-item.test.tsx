import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item';
import {ReviewType} from '../../types';

const review: ReviewType = {
  id: 2,
  user: {
    id: 15,
    name: `Kendall`
  },
  rating: 8.7,
  comment: ``,
  date: ``
};

it(`ReviewsItem should render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsItem
          review={review}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

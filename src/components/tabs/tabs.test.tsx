import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Tabs from './tabs';
import {MovieType, ReviewType} from '../../types';

const tabs: Array<string> = [`Overview`, `Reviews`, `Details`];
const activeItem: string = tabs[0];
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
  isFavorite: false,
};
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

it(`Tabs should render correctly`, () => {
  const tree = renderer
    .create(
        <Tabs
          activeMovie={activeMovie}
          activeItem={activeItem}
          reviews={reviews}
          onItemClick={noop}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

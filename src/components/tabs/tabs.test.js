import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs';

const tabs = [`Overview`, `Reviews`, `Details`];
const activeItem = tabs[0];
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
  video: ``
};

it(`Tabs should render correctly`, () => {
  const tree = renderer
    .create(
        <Tabs
          activeMovie={activeMovie}
          activeItem={activeItem}
          onItemClick={() => {}}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

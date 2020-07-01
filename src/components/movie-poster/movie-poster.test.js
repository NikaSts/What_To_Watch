import React from 'react';
import renderer from 'react-test-renderer';
import MoviePoster from './movie-poster';


const title = `New Year`;
const image = `the-grand-budapest-hotel`;

it(`MoviePoster should render correctly if user is logged in`, () => {
  const tree = renderer
  .create(
      <MoviePoster
        title={title}
        image={image}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

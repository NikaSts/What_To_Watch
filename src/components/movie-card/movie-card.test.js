import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

const title = `Harry Potter`;
const children = <video />;

it(`MovieCard should render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          title={title}
          onMovieTitleClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => { }}
        >
          {children}
        </MovieCard>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

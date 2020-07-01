import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardSmall from './movie-card-small.jsx';

const movie = {
  title: `Harry Potter`,
  image: `harry-potter`
};

it(`MovieCard should render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardSmall
          movie={movie}
          onMovieTitleClick={() => {}}
          onMovieCardMouseEnter={() => {}}
        />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

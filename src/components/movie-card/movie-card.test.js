import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const movie = {
  title: `Harry Potter`,
  image: `harry-potter`
};

it(`MovieCard should render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          movie={movie}
          onMovieTitleClick={() => {}}
          onMovieCardMouseEnter={() => {}}
        />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

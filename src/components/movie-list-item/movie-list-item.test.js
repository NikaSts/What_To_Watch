import React from 'react';
import renderer from 'react-test-renderer';
import MovieListItem from './movie-list-item.jsx';

const movie = {
  title: `Harry Potter`,
  image: `harry-potter`
};

it(`MovieCard should render correctly`, () => {
  const tree = renderer
    .create(
        <MovieListItem
          movie={movie}
          onMovieTitleClick={() => {}}
          onMovieCardMouseEnter={() => {}}
        />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const movie = {
  title: `Harry Potter`,
  image: `harry-potter`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
};

it(`MovieCard should render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          movie={movie}
          onMovieTitleClick={() => {}}
          onMovieCardMouseEnter={() => {}}
          onMovieCardMouseLeave={() => {}}
        />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

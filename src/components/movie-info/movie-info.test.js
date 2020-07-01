import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from './movie-info';

const title = `The Grand Budapest Hotel`;
const genre = `Drama`;
const releaseDate = 2014;

it(`MovieInfo should render correctly`, () => {
  const tree = renderer
  .create(
      <MovieInfo
        title={title}
        genre={genre}
        releaseDate={releaseDate}
        isLogged={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();

});

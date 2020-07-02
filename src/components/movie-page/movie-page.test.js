import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page';

const activeMovie = {
  id: `one`,
  title: `Once Upon a Time in Hollywood`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingCount: 240,
  text: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
  director: `Quentin Tarantino`,
  starring: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
};

const movies = [{
  id: `one`,
  title: `Once Upon a Time in Hollywood`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingCount: 240,
  text: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
  director: `Quentin Tarantino`,
  starring: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
}, {
  id: `two`,
  title: `Kill Bill`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingCount: 240,
  text: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
  director: `Quentin Tarantino`,
  starring: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
}];


it(`MoviePage should render correctly`, () => {
  const tree = renderer
  .create(
      <MoviePage
        activeMovie={activeMovie}
        movies={movies}
        onMovieTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

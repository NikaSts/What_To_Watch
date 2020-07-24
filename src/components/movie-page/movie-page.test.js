import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MoviePage from './movie-page';

const mockStore = configureStore([]);

const activeMovie = {
  id: `one`,
  title: `Once Upon a Time in Hollywood`,
  runTime: `1h 39m`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: 240,
  paragraphs: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
  director: `Quentin Tarantino`,
  stars: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
};
const movies = [{
  id: `one`,
  title: `Once Upon a Time in Hollywood`,
  runTime: `1h 39m`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: 240,
  paragraphs: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
  director: `Quentin Tarantino`,
  stars: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`
}, {
  id: `two`,
  title: `Kill Bill`,
  runTime: `1h 39m`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: 240,
  paragraphs: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
  director: `Quentin Tarantino`,
  stars: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`
}];
const moviesToShow = [{
  id: `one`,
  title: `Once Upon a Time in Hollywood`,
  runTime: `1h 39m`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: 240,
  paragraphs: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
  director: `Quentin Tarantino`,
  stars: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`
}, {
  id: `two`,
  title: `Kill Bill`,
  runTime: `1h 39m`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: 240,
  paragraphs: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
  director: `Quentin Tarantino`,
  stars: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`
}];


it(`MoviePage should render correctly`, () => {
  const store = mockStore({
    activeMovie,
    movies,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            moviesToShow={moviesToShow}
            onMovieTitleClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});

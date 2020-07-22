import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';

const mockStore = configureStore([]);

const activeMovie = {
  id: `one`,
  title: `The Grand Budapest Hotel`,
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
};
const promoMovie = {
  id: `one`,
  title: `The Grand Budapest Hotel`,
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
};
const movies = [
  {
    id: `1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    runTime: `1h 39m`,
    genre: `Drama`,
    releaseDate: 2014,
    image: `fantastic-beasts-the-crimes-of-grindelwald`,
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
  },
  {
    id: `2`,
    title: `Bohemian Rhapsody`,
    runTime: `1h 39m`,
    genre: `Drama`,
    releaseDate: 2014,
    image: `bohemian-rhapsody`,
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
  },
];

it(`App should render Main`, () => {
  const store = mockStore({
    activeMovie: null,
    promoMovie,
    isVideoPlayer: false,
    movies,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            onMovieTitleClick={() => { }}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});


it(`App should render MoviePage`, () => {
  const store = mockStore({
    activeMovie,
    promoMovie,
    isVideoPlayer: false,
    movies,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            onMovieTitleClick={() => { }}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});

/* it(`App should render VideoPlayer`, () => {
  const store = mockStore({
    activeMovie: null,
    promoMovie,
    isVideoPlayer: true,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            onMovieTitleClick={() => { }}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
 */

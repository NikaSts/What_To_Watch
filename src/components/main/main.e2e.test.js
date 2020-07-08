import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';


Enzyme.configure({
  adapter: new Adapter(),
});

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
  text: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
  director: `Quentin Tarantino`,
  starring: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`
};
const genres = [`All genres`, `Drama`];
const moviesByGenre = [
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
    text: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
    director: `Quentin Tarantino`,
    starring: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
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
    text: [`Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles,
  where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime
  stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize
  anymore. The ninth film from the writer-director features a large ensemble cast and multiple
  storylines in a tribute to the final moments of Hollywood's golden age.`],
    director: `Quentin Tarantino`,
    starring: [`Leonardo DiCaprio`, `Brad Pitt`, `Margot Robbie`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`
  },
];
const activeGenre = `All genres`;

it(`Movie card should be pressed`, () => {
  const onMovieTitleClick = jest.fn();
  const main = mount(
      <Main
        promoMovie={promoMovie}
        genres={genres}
        activeGenre={activeGenre}
        moviesByGenre={moviesByGenre}
        onGenreClick={() => {}}
        onMovieTitleClick={onMovieTitleClick}
      />
  );
  const movieCard = main.find(`.small-movie-card`);
  movieCard.forEach((card) => card.simulate(`click`));
  expect(onMovieTitleClick).toHaveBeenCalledTimes(2);
});

import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list';

const movies = [
  {
    id: `1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `fantastic-beasts-the-crimes-of-grindelwald`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
  {
    id: `2`,
    title: `Bohemian Rhapsody`,
    image: `bohemian-rhapsody`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
  {
    id: `3`,
    title: `Macbeth`,
    image: `macbeth`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
  {
    id: `4`,
    title: `Aviator`,
    image: `aviator`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
  {
    id: `5`,
    title: `We need to talk about Kevin`,
    image: `we-need-to-talk-about-kevin`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
  {
    id: `6`,
    title: `What We Do in the Shadows`,
    image: `what-we-do-in-the-shadows`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
];
const activeGenre = `All genres`;

it(`MoviesList should render correctly`, () => {
  const tree = renderer
      .create(<MovieList
        movies={movies}
        activeGenre={activeGenre}
        onMovieTitleClick={() => {}}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

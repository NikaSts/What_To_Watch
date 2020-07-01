import React from "react";
import renderer from "react-test-renderer";
import App from './app.jsx';


const promoMovie = {
  id: `one`,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
};

const movies = [
  {
    id: `1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `fantastic-beasts-the-crimes-of-grindelwald`,
  },
  {
    id: `2`,
    title: `Bohemian Rhapsody`,
    image: `bohemian-rhapsody`,
  },
  {
    id: `3`,
    title: `Macbeth`,
    image: `macbeth`,
  },
  {
    id: `4`,
    title: `Aviator`,
    image: `aviator`,
  },
  {
    id: `5`,
    title: `We need to talk about Kevin`,
    image: `we-need-to-talk-about-kevin`,
  },
  {
    id: `6`,
    title: `What We Do in the Shadows`,
    image: `what-we-do-in-the-shadows`,
  },
  {
    id: `7`,
    title: `Revenant`,
    image: `revenant`,
  },
  {
    id: `8`,
    title: `Johnny English`,
    image: `johnny-english`,
  },
];

const genres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];


it(`App should render correctly`, () => {
  const tree = renderer
      .create(<App
        promoMovie={promoMovie}
        movies={movies}
        genres={genres}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

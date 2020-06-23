import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';


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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`Movie title should be pressed`, () => {
    const onMovieTitleClick = jest.fn();

    const main = mount(
        <Main
          promoMovie={promoMovie}
          movies={movies}
          onMovieTitleClick={onMovieTitleClick}
        />
    );

    const movieTitle = main.find(`a.small-movie-card__link`);
    movieTitle.forEach((title) => title.simulate(`click`));

    expect(onMovieTitleClick).toHaveBeenCalledTimes(movies.length);
  });
});

import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';


const movie = {
  'title': `The Grand Budapest Hotel`,
  'genre': `Drama`,
  'releaseDate': 2014,
};

const movies = [
  {
    'id': `1`,
    'title': `Fantastic Beasts: The Crimes of Grindelwald`,
    'url': `fantastic-beasts-the-crimes-of-grindelwald`,
  },
  {
    'id': `2`,
    'title': `Bohemian Rhapsody`,
    'url': `bohemian-rhapsody`,
  },
  {
    'id': `3`,
    'title': `Macbeth`,
    'url': `macbeth`,
  },
  {
    'id': `4`,
    'title': `Aviator`,
    'url': `aviator`,
  },
  {
    'id': `5`,
    'title': `We need to talk about Kevin`,
    'url': `we-need-to-talk-about-kevin`,
  },
  {
    'id': `6`,
    'title': `What We Do in the Shadows`,
    'url': `what-we-do-in-the-shadows`,
  },
  {
    'id': `7`,
    'title': `Revenant`,
    'url': `revenant`,
  },
  {
    'id': `8`,
    'title': `Johnny English`,
    'url': `johnny-english`,
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
          movie={movie}
          movies={movies}
          onMovieTitleClick={onMovieTitleClick}
        />
    );

    const movieTitle = main.find(`a.small-movie-card__link`);
    movieTitle.forEach((title) => title.simulate(`click`));

    expect(onMovieTitleClick).toHaveBeenCalledTimes(movies.length);
  });
});

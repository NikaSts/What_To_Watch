import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from './main.jsx';


const movie = {
  'title': `The Grand Budapest Hotel`,
  'genre': `Drama`,
  'releaseDate': 2014,
};

const movieTitles = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`Movie title should be pressed`, () => {
    const onMovieTitleClick = jest.fn();

    const main = shallow(
        <Main
          movie={movie}
          movieTitles={movieTitles}
          onMovieTitleClick={onMovieTitleClick}
        />
    );

    const movieTitle = main.find(`a.small-movie-card__link`);
    movieTitle.forEach((title) => title.simulate(`click`));

    expect(onMovieTitleClick).toHaveBeenCalledTimes(movieTitles.length);
  });
});

import React from "react";
import renderer from "react-test-renderer";
import App from './app.jsx';


const film = {
  'title': `The Grand Budapest Hotel`,
  'genre': `Drama`,
  'releaseDate': 2014,
};

const filmTitles = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`];

describe(`AppComponent`, () => {
  it(`App should render correctly`, () => {
    const tree = renderer
      .create(<App
        film={film}
        filmTitles={filmTitles}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

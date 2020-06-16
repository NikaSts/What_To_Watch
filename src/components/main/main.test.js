import React from "react";
import renderer from "react-test-renderer";
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

describe(`MainComponent`, () => {
  it(`Main should render correctly`, () => {
    const tree = renderer
      .create(<Main
        movie={movie}
        movies={movies}
        onMovieTitleClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

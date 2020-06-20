import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from './movie-card.jsx';

const movie = {
  title: `Harry Potter`,
  url: `harry-potter`
};

it(`SmallMovieCard should render correctly`, () => {
  const tree = renderer
      .create(<SmallMovieCard
        movie={movie}
        onMovieTitleClick={() => {}}
        onSmallMovieCardHover={() => {}}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

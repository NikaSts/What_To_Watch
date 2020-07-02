import React from "react";
import renderer from "react-test-renderer";
import GenreList from './genre-list.jsx';

const genres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`,
  `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];


it(`MoviesList should render correctly`, () => {
  const tree = renderer
      .create(<GenreList
        genres={genres}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

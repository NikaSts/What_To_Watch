import React from "react";
import renderer from "react-test-renderer";
import GenreList from './genre-list.jsx';

const genres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`,
  `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
const activeGenre = `Drama`;

it(`MoviesList should render correctly`, () => {
  const tree = renderer
      .create(<GenreList
        genres={genres}
        activeGenre={activeGenre}
        onGenreClick={() => {}}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

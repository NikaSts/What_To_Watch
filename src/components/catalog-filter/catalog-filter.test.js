import React from "react";
import renderer from "react-test-renderer";
import CatalogFilter from './catalog-filter';

const genres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`,
  `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
const activeGenre = `Drama`;

it(`CatalogFilter should render correctly`, () => {
  const tree = renderer
      .create(<CatalogFilter
        genres={genres}
        activeGenre={activeGenre}
        onGenreClick={() => {}}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

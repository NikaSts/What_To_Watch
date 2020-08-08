import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CatalogFilter from './catalog-filter';

const genres: Array<string> = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`,
  `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
const activeGenre = `Drama`;
const noop = () => {
  // Mock function for test props
};

it(`CatalogFilter should render correctly`, () => {
  const tree = renderer
      .create(<CatalogFilter
        genres={genres}
        activeGenre={activeGenre}
        onGenreClick={noop}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

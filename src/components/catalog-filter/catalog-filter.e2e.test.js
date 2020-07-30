import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatalogFilter from './catalog-filter';

Enzyme.configure({
  adapter: new Adapter(),
});

const genres = [`Drama`, `Horror`, `Comedy`];
const activeGenre = `Drama`;

it(`Genre will be pressed and new page won't open`, () => {
  const onGenreClick = jest.fn();
  const genreList = shallow(
      <CatalogFilter
        genres={genres}
        activeGenre={activeGenre}
        onGenreClick={onGenreClick}
      />
  );
  const newPageOpenPrevention = jest.fn();

  const genreLinks = genreList.find(`a`);
  genreLinks.forEach((link) => link.simulate(`click`, {
    preventDefault: newPageOpenPrevention,
  }));

  expect(onGenreClick).toHaveBeenCalledTimes(genreLinks.length);
  expect(newPageOpenPrevention).toHaveBeenCalledTimes(genreLinks.length);
});

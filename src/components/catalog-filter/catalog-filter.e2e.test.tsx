import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import CatalogFilter from './catalog-filter';

configure({
  adapter: new Adapter(),
});

const genres: Array<string> = [`Drama`, `Horror`, `Comedy`];
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

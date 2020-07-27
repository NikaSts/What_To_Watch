import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatalogCard from './catalog-card';

configure({
  adapter: new Adapter(),
});

const title = `Harry Potter`;
const children = <video />;

it(`CatalogCard should be pressed`, () => {
  const onCatalogCardClick = jest.fn();
  const catalogCard = mount(
      <CatalogCard
        title={title}
        onCatalogCardClick={onCatalogCardClick}
        onMouseEnter={() => {}}
        onMouseLeave={() => { }}
      >
        {children}
      </CatalogCard>
  );

  catalogCard.simulate(`click`);

  expect(onCatalogCardClick).toHaveBeenCalledTimes(1);
});

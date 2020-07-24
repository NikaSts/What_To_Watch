import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

configure({
  adapter: new Adapter(),
});

const title = `Harry Potter`;
const children = <video />;

it(`MovieCard should be pressed`, () => {
  const onMovieTitleClick = jest.fn();
  const movieCard = mount(
      <MovieCard
        title={title}
        onMovieTitleClick={onMovieTitleClick}
        onMouseEnter={() => {}}
        onMouseLeave={() => { }}
      >
        {children}
      </MovieCard>
  );

  const movieTitle = movieCard.find(`a.small-movie-card__link`);
  movieTitle.simulate(`click`);

  expect(onMovieTitleClick).toHaveBeenCalledTimes(1);
});

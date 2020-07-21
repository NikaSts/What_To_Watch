import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';


const movie = {
  id: `one`,
  title: `Harry Potter`,
  image: `harry-potter`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Movie title should be pressed and new page won't open`, () => {
  const onMovieTitleClick = jest.fn();
  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const movieTitles = movieCard.find(`a.small-movie-card__link`);
  const newPageOpenPrevention = jest.fn();

  movieTitles.forEach((title) => title.simulate(`click`, {
    preventDefault: newPageOpenPrevention,
  }));

  expect(onMovieTitleClick).toHaveBeenCalledTimes(1);
  expect(newPageOpenPrevention).toHaveBeenCalledTimes(1);
});

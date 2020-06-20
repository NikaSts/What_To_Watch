import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './movie-card.jsx';


const movie = {
  title: `Harry Potter`,
  url: `harry-potter`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`SmallMovieCard title hover should return the movie`, () => {
  const onMovieTitleClick = jest.fn();
  const onSmallMovieCardHover = jest.fn((evt) => {
    const target = evt.target;
    return target;
  });

  const smallMovieCard = shallow(
      <SmallMovieCard
        movie={movie}
        onMovieTitleClick={onMovieTitleClick}
        onSmallMovieCardHover={onSmallMovieCardHover}
      />
  );

  const cardTitle = smallMovieCard.find(`a.small-movie-card__link`);
  cardTitle.simulate(`mouseEnter`, {target: {movie}});
  expect(onSmallMovieCardHover).toHaveReturnedWith({movie});
});

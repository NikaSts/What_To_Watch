import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';


const movie = {
  title: `Harry Potter`,
  url: `harry-potter`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`SmallMovieCard title should be pressed`, () => {
  const onMovieTitleClick = jest.fn();
  const smallMovieCard = shallow(
      <SmallMovieCard
        movie={movie}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const movieTitle = smallMovieCard.find(`a.small-movie-card__link`);
  movieTitle.simulate(`click`);
  expect(onMovieTitleClick).toHaveBeenCalledTimes(1);
});

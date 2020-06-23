import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';


const movie = {
  title: `Harry Potter`,
  url: `harry-potter`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`MovieCard title hover should return the movie`, () => {
  const onMovieTitleClick = jest.fn();
  const onMovieCardMouseEnter = jest.fn((evt) => {
    const target = evt.target;
    return target;
  });

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieTitleClick={onMovieTitleClick}
        onMovieCardMouseEnter={onMovieCardMouseEnter}
      />
  );

  const cardTitle = movieCard.find(`a.small-movie-card__link`);
  cardTitle.simulate(`mouseEnter`, {target: {movie}});
  expect(onMovieCardMouseEnter).toHaveReturnedWith({movie});
});

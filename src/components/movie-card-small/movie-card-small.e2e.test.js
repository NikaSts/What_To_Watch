import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCardSmall from './movie-card-small.jsx';


const movie = {
  id: `one`,
  title: `Harry Potter`,
  image: `harry-potter`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`MovieCard hover should return the movie`, () => {
  const onMovieCardMouseEnter = jest.fn((id) => id);
  const movieCard = shallow(
      <MovieCardSmall
        movie={movie}
        onMovieCardMouseEnter={onMovieCardMouseEnter}
      />
  );

  movieCard.simulate(`mouseEnter`, movie.id);
  expect(onMovieCardMouseEnter).toHaveReturnedWith(movie.id);
});

it(`Movie title should be pressed and new page won't open`, () => {
  const onMovieTitleClick = jest.fn();
  const movieCard = shallow(
      <MovieCardSmall
        movie={movie}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const movieTitle = movieCard.find(`a.small-movie-card__link`);
  const newPageOpenPrevention = jest.fn();

  movieTitle.forEach((title) => title.simulate(`click`, {
    preventDefault: newPageOpenPrevention,
  }));

  expect(onMovieTitleClick).toHaveBeenCalledTimes(1);
  expect(newPageOpenPrevention).toHaveBeenCalledTimes(1);
});

import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieListItem from './movie-list-item.jsx';


const movie = {
  id: `one`,
  title: `Harry Potter`,
  image: `harry-potter`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`MovieListItem hover should return the movie`, () => {
  const onMovieCardMouseEnter = jest.fn((id) => id);
  const movieCard = shallow(
      <MovieListItem
        movie={movie}
        onMovieCardMouseEnter={onMovieCardMouseEnter}
      />
  );

  movieCard.simulate(`mouseEnter`, movie.id);
  expect(onMovieCardMouseEnter).toHaveBeenCalledTimes(1);
  expect(onMovieCardMouseEnter).toHaveReturnedWith(movie.id);
});

it(`MovieListItem onMouseLeave should return null`, () => {
  const onMovieCardMouseLeave = jest.fn((id) => id);
  const movieCard = shallow(
      <MovieListItem
        movie={movie}
        onMovieCardMouseLeave={onMovieCardMouseLeave}
      />
  );

  movieCard.simulate(`mouseLeave`);
  expect(onMovieCardMouseLeave).toHaveBeenCalledTimes(1);
  expect(onMovieCardMouseLeave).not.toHaveReturnedWith(movie.id);
});

it(`Movie title should be pressed and new page won't open`, () => {
  const onMovieTitleClick = jest.fn();
  const movieCard = shallow(
      <MovieListItem
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

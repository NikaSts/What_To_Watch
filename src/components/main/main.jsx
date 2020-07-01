import React from 'react';
import {func, arrayOf, string} from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import {cardMovieType, promoMovieType} from '../../types';
import MovieCardBig from '../movie-card-big/movie-card-big.jsx';


const Main = (props) => {
  const {promoMovie, movies, genres, onMovieTitleClick, onMovieCardMouseEnter} = props;

  return (
    <React.Fragment>
      <MovieCardBig
        movie={promoMovie}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            genres={genres}
          />

          <MovieList
            movies={movies}
            onMovieTitleClick={onMovieTitleClick}
            onMovieCardMouseEnter={onMovieCardMouseEnter}
          />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoMovie: promoMovieType.isRequired,
  movies: arrayOf(cardMovieType.isRequired).isRequired,
  genres: arrayOf(string.isRequired).isRequired,
  onMovieTitleClick: func.isRequired,
  onMovieCardMouseEnter: func.isRequired,
};

export default Main;

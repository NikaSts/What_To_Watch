import React, {Fragment} from 'react';
import {func, arrayOf} from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';
import {movieType, cardMovieType} from '../../types';
import AppHeader from '../app-header/app-header.jsx';
import UserMenu from '../user-menu/user-menu.jsx';


const MoviePage = ({activeMovie, movies, onMovieTitleClick, onMovieCardMouseEnter}) => {
  const {id, title, genre, releaseDate, image, ratingScore, ratingLevel, ratingCount, text, director, starring} = activeMovie;
  const shownActors = starring.slice(0, 4).join(`, `);
  return (
    <Fragment>
      <section key={id} className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`img/${image}.jpg`} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <AppHeader />

          <div className="movie-card__wrap">

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <UserMenu
                isLogged={true}
              />
            </div>

          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${image}.jpg`} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{ratingScore}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{ratingLevel}</span>
                  <span className="movie-rating__count">{ratingCount} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                {text.join(` `)}
                <p
                  className="movie-card__director"><strong>Director: {director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {shownActors} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList
            movies={movies}
            onMovieTitleClick={onMovieTitleClick}
            onMovieCardMouseEnter={onMovieCardMouseEnter}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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
    </Fragment>
  );
};

export default MoviePage;

MoviePage.propTypes = {
  activeMovie: movieType.isRequired,
  movies: arrayOf(cardMovieType.isRequired).isRequired,
  onMovieTitleClick: func.isRequired,
  onMovieCardMouseEnter: func.isRequired,
};

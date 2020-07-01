import React, {Fragment} from 'react';
import {func, arrayOf} from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';
import {movieType, cardMovieType} from '../../types';
import PageHeader from '../page-header/page-header.jsx';
import UserMenu from '../user-menu/user-menu.jsx';
import PageContent from '../page-content/page-content.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import MovieInfo from '../movie-info/movie-info.jsx';


const MoviePage = ({activeMovie, movies, onMovieTitleClick, onMovieCardMouseEnter}) => {
  const {id, title, genre, releaseDate, image} = activeMovie;
  return (
    <Fragment>
      <section key={id} className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`img/${image}.jpg`} alt={title} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <PageHeader />

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

        <MovieInfo
          activeMovie={activeMovie}
        />
      </section>

      <PageContent>
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList
            movies={movies}
            onMovieTitleClick={onMovieTitleClick}
            onMovieCardMouseEnter={onMovieCardMouseEnter}
          />
        </section>

        <PageFooter />

      </PageContent>
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

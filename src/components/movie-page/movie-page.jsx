import React, {Fragment} from 'react';
import {func, arrayOf} from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';
import PageHeader from '../page-header/page-header.jsx';
import PageContent from '../page-content/page-content.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import Tabs from '../tabs/tabs.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieInfo from '../movie-info/movie-info.jsx';
import {movieType, cardMovieType} from '../../types';


const MoviePage = ({activeMovie, movies, onMovieTitleClick, onMovieCardMouseEnter}) => {
  const {id, title, image} = activeMovie;

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
            <MovieInfo
              movie={activeMovie}
              isLogged={true}
            />
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${image}.jpg`} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs />
              <MovieOverview
                activeMovie={activeMovie}
              />

            </div>
          </div>
        </div>
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

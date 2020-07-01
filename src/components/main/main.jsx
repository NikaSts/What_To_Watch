import React from 'react';
import {func, arrayOf, string} from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import {cardMovieType, promoMovieType} from '../../types';
import MovieCardBig from '../movie-card-big/movie-card-big.jsx';
import PageContent from '../page-content/page-content.jsx';
import PageFooter from '../page-footer/page-footer.jsx';


const moreButton = <div className="catalog__more">
  <button className="catalog__button" type="button">Show more</button>
</div>;

const Main = (props) => {
  const {promoMovie, movies, genres, onMovieTitleClick, onMovieCardMouseEnter} = props;

  return (
    <React.Fragment>
      <MovieCardBig
        movie={promoMovie}
      />

      <PageContent>
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

          {moreButton}
        </section>

        <PageFooter />

      </PageContent>
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

import React from 'react';
import {bool} from 'prop-types';
import PageHeader from '../page-header/page-header.jsx';
import MovieInfo from '../movie-info/movie-info.jsx';
import MoviePoster from '../movie-poster/movie-poster.jsx';
import {promoMovieType} from '../../types';


const MovieCard = ({movie, isLogged}) => {
  const {title, image} = movie;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={`img/bg-${image}.jpg`} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <MoviePoster
            movie={movie}
          />
          <MovieInfo
            movie={movie}
            isLogged={isLogged}
          />
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  movie: promoMovieType.isRequired,
  isLogged: bool.isRequired,
};

export default MovieCard;

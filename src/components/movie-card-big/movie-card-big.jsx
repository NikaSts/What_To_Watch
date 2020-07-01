import React from 'react';
import {promoMovieType} from '../../types';
import UserMenu from '../user-menu/user-menu.jsx';
import PageHeader from '../page-header/page-header.jsx';


const MovieCardBig = (props) => {
  const {movie: {title, genre, releaseDate, image}} = props;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={`img/bg-${image}.jpg`} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={`img/${image}-poster.jpg`} alt={title} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <UserMenu
              isLogged={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCardBig.propTypes = {
  movie: promoMovieType.isRequired,
};

export default MovieCardBig;

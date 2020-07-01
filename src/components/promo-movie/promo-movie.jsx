import React from 'react';
import {promoMovieType} from '../../types';
import UserMenu from '../user-menu/user-menu';


const PromoMovie = (props) => {
  const {promoMovie: {title, genre, releaseDate, image}} = props;

  return (
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
  );
};

PromoMovie.propTypes = {
  promoMovie: promoMovieType.isRequired,
};

export default PromoMovie;

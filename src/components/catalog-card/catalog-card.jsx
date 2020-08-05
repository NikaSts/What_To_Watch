import React from 'react';
import {func, string, number, element} from 'prop-types';
import {Link} from 'react-router-dom';
import history from '../../history';
import {AppRoute} from '../../utils/consts';


const CatalogCard = ({
  id, title, onMouseEnter, onMouseLeave, children
}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onClick={() => history.push(`${AppRoute.MOVIE_PAGE}${id}`)}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Link to={`${AppRoute.MOVIE_PAGE}${id}`}>
      <div className="small-movie-card__image">
        {children}
      </div>
    </Link>
    <h3 className="small-movie-card__title">
      <Link to={`${AppRoute.MOVIE_PAGE}${id}`}
        className="small-movie-card__link">
        {title}
      </Link>
    </h3>
  </article>
);

CatalogCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
  children: element.isRequired,
};

export default CatalogCard;

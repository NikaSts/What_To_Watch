import React from 'react';
import {func, string, node, number} from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';


const CatalogCard = ({
  id, title, onCatalogCardClick, onMouseEnter, onMouseLeave, children
}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onClick={() => onCatalogCardClick(id)}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Link to={AppRoute.MOVIE_PAGE}>
      <div className="small-movie-card__image">
        {children}
      </div>
    </Link>
    <h3 className="small-movie-card__title">
      <Link to={AppRoute.MOVIE_PAGE}
        className="small-movie-card__link">
        {title}
      </Link>
    </h3>
  </article>
);

CatalogCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  onCatalogCardClick: func.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
  children: node.isRequired,
};

export default CatalogCard;

import React from 'react';
import {func, string, node, number, shape} from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';
import {withRouter} from 'react-router-dom';


const CatalogCard = ({
  id, title, onCatalogCardClick, onMouseEnter, onMouseLeave, children, history
}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onClick={() => {
      onCatalogCardClick(id);
      history.push(`${AppRoute.MOVIE_PAGE}/${id}`);
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Link to={`${AppRoute.MOVIE_PAGE}/${id}`}>
      <div className="small-movie-card__image">
        {children}
      </div>
    </Link>
    <h3 className="small-movie-card__title">
      <Link to={`${AppRoute.MOVIE_PAGE}/${id}`}
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
  history: shape(),
};

export default withRouter(CatalogCard);

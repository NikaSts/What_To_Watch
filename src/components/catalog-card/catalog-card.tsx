import * as React from 'react';
import {Link} from 'react-router-dom';
import history from '../../history';
import {AppRoute} from '../../utils/consts';

interface CatalogCardProps {
  id: number;
  title: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
}

const CatalogCard: React.FC<CatalogCardProps> = ({
  id, title, onMouseEnter, onMouseLeave, children
}: CatalogCardProps) => (
  <article
    className="small-movie-card catalog__movies-card"
    onClick={() => history.push(`${AppRoute.MOVIE_PAGE}/${id}`)}
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


export default CatalogCard;

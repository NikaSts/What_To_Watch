import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';

interface BreadCrumbsProps {
  id: number;
  title: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({id, title}: BreadCrumbsProps) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`${AppRoute.MOVIE_PAGE}/${id}`} className="breadcrumbs__link">
          {title}
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">Add review</a>
      </li>
    </ul>
  </nav>
);


export default BreadCrumbs;

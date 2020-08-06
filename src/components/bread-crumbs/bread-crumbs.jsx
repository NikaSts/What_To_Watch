import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';
import {string, number} from 'prop-types';

const BreadCrumbs = ({id, title}) => (
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

BreadCrumbs.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
};

export default BreadCrumbs;

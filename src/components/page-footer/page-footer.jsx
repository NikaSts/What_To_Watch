import React from 'react';
import {bool} from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';

const PageFooter = () => (
  <footer className="page-footer">
    <div className="logo">
      <Link to={AppRoute.ROOT}
        className="logo__link logo__link--light">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

PageFooter.defaultProps = {
  isMain: false,
};

PageFooter.propTypes = {
  isMain: bool.isRequired,
};

export default PageFooter;

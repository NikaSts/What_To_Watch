import React from 'react';
import {bool} from 'prop-types';

const PageFooter = ({isMain}) => (
  <footer className="page-footer">
    <div className="logo">
      <a
        className="logo__link logo__link--light"
        href={isMain ? undefined : `main.html`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
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

import React, {Fragment} from 'react';
import {bool, func} from 'prop-types';

const PageHeader = ({isMain, isSignedIn, isSignInPage, onSignInButtonClick}) => (
  <Fragment>
    <header className="page-header movie-card__head">
      <div className="logo">
        <a
          className="logo__link"
          href={isMain ? undefined : `main.html`}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {isSignInPage && <h1 className="page-title user-page__title">Sign in</h1>}

      {!isSignInPage && <div className="user-block">
        {isSignedIn
          ? <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
          : <a href="sign-in.html" className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              onSignInButtonClick();
            }
            }>Sign in</a>}
      </div>}
    </header>
  </Fragment>
);

PageHeader.defaultProps = {
  isMain: false,
  isSignInPage: false,
};

PageHeader.propTypes = {
  isMain: bool.isRequired,
  isSignedIn: bool,
  isSignInPage: bool.isRequired,
  onSignInButtonClick: func,
};

export default PageHeader;

import React, {Fragment} from 'react';
import cn from 'classnames';
import {bool, func, number, string, shape} from 'prop-types';

const PageHeader = ({isMain, isSignedIn, isSignInPage, onSignInButtonClick, userData}) => {
  const pageHeaderClass = cn({
    'page-header': true,
    'movie-card__head': !isSignInPage,
    'user-page__head': isSignInPage,
  });

  return (
    <Fragment>
      <header className={pageHeaderClass}>
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
          {isSignedIn && userData
            ? <div className="user-block__avatar">
              <img src={`https://4.react.pages.academy${userData.avatar}`} alt="User avatar" width="63" height="63" />
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
};

PageHeader.defaultProps = {
  isMain: false,
  isSignInPage: false,
};

PageHeader.propTypes = {
  isMain: bool.isRequired,
  isSignedIn: bool,
  isSignInPage: bool.isRequired,
  onSignInButtonClick: func,
  userData: shape({
    id: number.isRequired,
    name: string.isRequired,
    email: string.isRequired,
    avatar: string.isRequired,
  })
};

export default PageHeader;

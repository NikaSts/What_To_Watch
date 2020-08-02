import React, {Fragment} from 'react';
import cn from 'classnames';
import {bool, func, number, string, shape} from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';

const PageHeader = ({isSignedIn, isSignInPage, onSignInButtonClick, userData}) => {
  const pageHeaderClass = cn({
    'page-header': true,
    'movie-card__head': !isSignInPage,
    'user-page__head': isSignInPage,
  });

  return (
    <Fragment>
      <header className={pageHeaderClass}>
        <div className="logo">
          <Link to={AppRoute.ROOT}
            className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        {isSignInPage && <h1 className="page-title user-page__title">Sign in</h1>}

        {!isSignInPage && <div className="user-block">
          {isSignedIn && userData
            ? <Link to={AppRoute.MY_LIST}>
              <div className="user-block__avatar">
                <img src={`https://4.react.pages.academy${userData.avatar}`} alt="User avatar" width="63" height="63" />
              </div>
            </Link>
            : <Link to={AppRoute.LOGIN}
              className="user-block__link"
              onClick={onSignInButtonClick()}>
              Sign in
            </Link>}
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

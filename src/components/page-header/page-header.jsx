import React, {Fragment} from 'react';
import cn from 'classnames';
import {bool, number, string, shape, element} from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute, URL, Page} from '../../utils/consts';

const PageHeader = ({children, isAuth, currentPage, user}) => {

  const isMainPage = currentPage === Page.MAIN;
  const isSignInPage = currentPage === Page.SIGN_IN;
  const isMyListPage = currentPage === Page.MY_LIST;
  const isReviewPage = currentPage === Page.REVIEW;
  const isErrorPage = currentPage === Page.ERROR;

  const pageHeaderClass = cn({
    'page-header': true,
    'movie-card__head': isReviewPage || isMainPage,
    'user-page__head': isSignInPage || isMyListPage || isErrorPage,
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

        {isReviewPage && children}

        {isSignInPage && <h1 className="page-title user-page__title">Sign in</h1>}
        {isMyListPage && <h1 className="page-title user-page__title">My list</h1>}
        {isErrorPage && <h1 className="page-title user-page__title">Error</h1>}

        {!isSignInPage && !isErrorPage && <div className="user-block">
          {isAuth && user
            ? <Link to={AppRoute.MY_LIST}>
              <div className="user-block__avatar">
                <img src={`${URL}${user.avatar}`} alt="User avatar" width="63" height="63" />
              </div>
            </Link>
            : <Link to={AppRoute.LOGIN}
              className="user-block__link">
              Sign in
            </Link>}
        </div>}
      </header>
    </Fragment>
  );
};


PageHeader.propTypes = {
  currentPage: string.isRequired,
  isAuth: bool,
  user: shape({
    id: number.isRequired,
    name: string.isRequired,
    email: string.isRequired,
    avatar: string.isRequired,
  }),
  children: element,
};

export default PageHeader;

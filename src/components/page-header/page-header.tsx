import * as React from 'react';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import {AppRoute, URL, Page} from '../../utils/consts';
import {UserDataType} from '../../types';

interface PageHeaderProps {
  currentPage: string;
  isAuth: boolean;
  user?: UserDataType;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  children, isAuth, currentPage, user
}: PageHeaderProps) => {

  const isMainPage: boolean = currentPage === Page.MAIN;
  const isSignInPage: boolean = currentPage === Page.SIGN_IN;
  const isMyListPage: boolean = currentPage === Page.MY_LIST;
  const isReviewPage: boolean = currentPage === Page.REVIEW;
  const isErrorPage: boolean = currentPage === Page.ERROR;

  const pageHeaderClass = cn({
    'page-header': true,
    'movie-card__head': isReviewPage || isMainPage,
    'user-page__head': isSignInPage || isMyListPage || isErrorPage,
  });

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};


export default PageHeader;

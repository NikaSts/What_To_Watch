import React from 'react';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import {Page} from '../../utils/consts';

const ErrorPage = () => {
  return (
    <div className="user-page">
      <PageHeader
        currentPage={Page.ERROR}
      />

      <div className="sign-in user-page__content">
        <p>Что-то пошло не так.</p>
        <p>Возможно, запрашиваемая страница недоступна</p>
      </div>

      <PageFooter />
    </div>

  );
};

export default ErrorPage;

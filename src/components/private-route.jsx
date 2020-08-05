import React from 'react';
import {connect} from 'react-redux';
import {bool, string, func} from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import {getAuthorizationStatus} from '../store/user/selectors.js';
import {AuthorizationStatus, AppRoute} from '../utils/consts.js';


const PrivateRoute = (props) => {
  const {authorizationStatus, exact, path, render} = props;

  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        if (isAuth) {
          return render(routeProps);
        }

        return <Redirect to={`${AppRoute.LOGIN}`} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: string.isRequired,
  exact: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);

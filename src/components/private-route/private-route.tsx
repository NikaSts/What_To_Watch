import * as React from 'react';
import {connect} from 'react-redux';
import {RouterProps} from 'react-router';
import {Route, Redirect} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AuthorizationStatus, AppRoute} from '../../utils/consts';

interface PrivateRouteProps {
  authorizationStatus: string;
  exact: boolean;
  path: string;
  render: (routeProps: RouterProps) => React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  authorizationStatus, exact, path, render
}: PrivateRouteProps) => {
  const isAuth: boolean = authorizationStatus === AuthorizationStatus.AUTH;

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


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);

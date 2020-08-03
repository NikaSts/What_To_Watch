import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {number, string, shape, arrayOf, func} from 'prop-types';

import PageHeader from '../page-header/page-header';
import {getAuthorizationStatus, getUserData} from '../../store/user/selectors';
import {getFavouriteMovies} from '../../store/movies/selectors';

import {Operation as MoviesOperation} from '../../store/movies/actions';
import {AppRoute, AuthorizationStatus, Page} from '../../utils/consts';
import PageFooter from '../page-footer/page-footer';
import {Catalog} from '../catalog/catalog';
import {movieType} from '../../types';


class MyListPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavouriteMovies} = this.props;
    loadFavouriteMovies();
  }

  render() {
    const {authorizationStatus, userData, favouriteMovies} = this.props;
    const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
    if (!isAuth) {
      return <Redirect to={AppRoute.LOGIN} />;
    }

    return (
      <div className="user-page">
        <PageHeader
          currentPage={Page.MY_LIST}
          isAuth={isAuth}
          userData={userData}
        />
        <Catalog
          currentPage={Page.MY_LIST}
          favouriteMovies={favouriteMovies}
        />
        <PageFooter />
      </div>
    );
  }
}


MyListPage.propTypes = {
  authorizationStatus: string.isRequired,
  userData: shape({
    id: number.isRequired,
    name: string.isRequired,
    email: string.isRequired,
    avatar: string.isRequired,
  }),
  loadFavouriteMovies: func.isRequired,
  favouriteMovies: arrayOf(movieType).isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  favouriteMovies: getFavouriteMovies(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavouriteMovies() {
    dispatch(MoviesOperation.loadFavouriteMovies());
  },
});


export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);

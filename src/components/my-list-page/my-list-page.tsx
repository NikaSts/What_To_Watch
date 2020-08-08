import * as React from 'react';
import {connect} from 'react-redux';
import PageHeader from '../page-header/page-header';
import {getAuthorizationStatus, getUser} from '../../store/user/selectors';

import {Operation as MoviesOperation} from '../../store/movies/actions';
import {AuthorizationStatus, Page} from '../../utils/consts';
import PageFooter from '../page-footer/page-footer';
import {Catalog} from '../catalog/catalog';
import {UserDataType} from '../../types';

interface MyListPageProps {
  authorizationStatus: string;
  user: UserDataType;
  loadFavoriteMovies: () => void;
}

class MyListPage extends React.PureComponent<MyListPageProps, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavoriteMovies} = this.props;
    loadFavoriteMovies();
  }

  render() {
    const {authorizationStatus, user} = this.props;
    const isAuth: boolean = authorizationStatus === AuthorizationStatus.AUTH;
    const currentPage: string = Page.MY_LIST;

    return (
      <div className="user-page">
        <PageHeader
          currentPage={currentPage}
          isAuth={isAuth}
          user={user}
        />
        <Catalog
          currentPage={currentPage}
        />
        <PageFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteMovies() {
    dispatch(MoviesOperation.loadFavoriteMovies());
  },
});


export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);

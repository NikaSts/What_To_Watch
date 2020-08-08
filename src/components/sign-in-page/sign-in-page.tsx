import * as React from 'react';
import {connect} from 'react-redux';

import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';
import {Operation as UserOperation} from '../../store/user/actions';
import {getAuthorizationStatus, getIsAuthorizationError} from '../../store/user/selectors';
import {AuthorizationStatus, AppRoute, Page} from '../../utils/consts';
import {Redirect} from 'react-router-dom';

interface SignInPageProps {
  isAuthorizationError: boolean;
  authorizationStatus: string;
  onFormSubmit: (authData: {
    login: string;
    password: string;
  }) => void;
}

class SignInPage extends React.PureComponent<SignInPageProps, {}> {
  private loginRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  private handleFormSubmit(evt) {
    const {onFormSubmit} = this.props;

    evt.preventDefault();

    onFormSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  private showAuthorizationError() {
    return (
      <div className="sign-in__message">
        <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
      </div>
    );
  }

  render() {
    const {authorizationStatus, isAuthorizationError} = this.props;
    const isAuth: boolean = authorizationStatus === AuthorizationStatus.AUTH;
    if (isAuth) {
      return <Redirect to={AppRoute.ROOT} />;
    }
    return (
      <div className="user-page">
        <PageHeader
          isAuth={isAuth}
          currentPage={Page.SIGN_IN}
        />

        <div className="sign-in user-page__content">

          <form
            className="sign-in__form"
            action=""
            onSubmit={this.handleFormSubmit}>
            {isAuthorizationError && this.showAuthorizationError()}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address"
                  name="user-email" id="user-email" required
                  ref={this.loginRef}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password"
                  name="user-password" id="user-password" required
                  ref={this.passwordRef} />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">
                Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>

        </div>

        <PageFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isAuthorizationError: getIsAuthorizationError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(authData) {
    dispatch(UserOperation.login(authData));
  },
});


export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);

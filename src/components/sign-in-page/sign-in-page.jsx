import React, {PureComponent, createRef} from 'react';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';
import {func, bool} from 'prop-types';


export default class SignInPage extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  _showAuthorizationError() {
    return (
      <div className="sign-in__message">
        <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
      </div>
    );
  }

  render() {
    const {isAuthorizationError} = this.props;
    return (
      <div className="user-page">
        <PageHeader
          isSignInPage={true}
        />

        <div className="sign-in user-page__content">

          <form
            className="sign-in__form"
            action=""
            onSubmit={this._handleSubmit}>
            {isAuthorizationError && this._showAuthorizationError()}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address"
                  name="user-email" id="user-email"
                  ref={this.loginRef}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password"
                  name="user-password" id="user-password"
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

SignInPage.propTypes = {
  onSubmit: func.isRequired,
  isAuthorizationError: bool.isRequired,
};

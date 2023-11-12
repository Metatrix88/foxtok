import React, { useId } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// constants
import { PATH } from '../../constants/paths';
import { authStatuses } from '../../constants/authStatuses';

// components
import { Button } from '../../components/Button';
import { Logo } from '../../icons';

import { setAuthStatus } from '../../store/actions';

// styles
import './Login.css';

export const Login = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email')
    const password = formData.get('password')

    if(email && password) {
      dispatch(setAuthStatus(authStatuses.loggedIn))
      navigate(PATH.index)
    }
  }

  return(
    <div className="login">
      <Logo className="login__logo" />
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label className="login__label" htmlFor={emailId}>Email</label>
        <input
          className="login__text-field"
          id={emailId} type="email"
          placeholder="Email"
          autoComplete="off"
          name="email"
        />
        <label className="login__label" htmlFor={passwordId}>Password</label>
        <input
          name="password"
          className="login__text-field"
          id={passwordId}
          type="password"
          placeholder="Password"
        />
        <Button className="login__button" color="primary" type='submit'>Log In</Button>
      </form>
    </div>
  );
}
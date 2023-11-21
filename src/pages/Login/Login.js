import React, {useEffect, useId} from 'react';
import { useNavigate } from 'react-router-dom';

import {useLoginMutation} from '../../services/auth';

// constants
import { PATH } from '../../constants/paths';

// components
import { Button } from '../../components/Button';
import { Logo } from '../../icons';

// styles
import './Login.css';
import {useSelector} from 'react-redux';

export const Login = () => {
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => Boolean(state.auth.accessToken))
  const [login] = useLoginMutation();

  useEffect(() => {
    if (loggedIn) {
      navigate(PATH.index)
    }
  }, [loggedIn]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email')
    const password = formData.get('password')

    if(email && password) {
      login({ email, password });
    }
  };

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
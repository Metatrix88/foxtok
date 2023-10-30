import React, {forwardRef, useId} from 'react';

import {Modal} from '../Modal';
import {Button} from '../Button';

import "./LogInModal.css";

export const LogInModal = forwardRef((_, ref) => {
  const emailId = useId();
  const passwordId = useId();

  return (
    <Modal ref={ref} title="Log in">
      <form className="log-in">
        <label className="log-in__label" htmlFor={emailId}>Email</label>
        <input className="log-in__text-field" id={emailId} type="email" placeholder="Email"/>
        <label className="log-in__label" htmlFor={passwordId}>Password</label>
        <input className="log-in__text-field" id={passwordId} type="email" placeholder="Password"/>
        <Button className="log-in__button" color="primary">Log In</Button>
      </form>
    </Modal>
  );
});
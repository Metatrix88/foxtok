import React, {useRef, useState} from 'react';

// components
import { Container } from '../Container';
import { Search } from '../Search';
import { Button } from '../Button';
import {LogInModal} from '../LogInModal';

// icons
import { Logo, Plus } from '../../icons';

// styles
import './Header.css';

export const Header = () => {
  const logInRef = useRef(null)

  return (
    <header className="header">
      <Container className="header__container">
        <Logo></Logo>
        <Search></Search>
        <div className="header__buttons">
          <Button href='#' variant="outlined">
            <Plus></Plus>
            Upload
          </Button>
          <Button color="primary" onClick={() => logInRef.current.open()}>Log in</Button>
          <LogInModal ref={logInRef} />
        </div>
      </Container>
    </header>
  );
};
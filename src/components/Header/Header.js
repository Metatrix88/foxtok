import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {PATH} from '../../constants/paths';

// components
import { Container } from '../Container';
import { Search } from '../Search';
import { Button } from '../Button';

// icons
import { Logo, Plus } from '../../icons';

// styles
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Container className="header__container">
        <Link to={PATH.index}><Logo></Logo></Link>
        <Search></Search>
        <div className="header__buttons">
          <Button href='#' variant="outlined">
            <Plus></Plus>
            Upload
          </Button>
          <Button color="primary" onClick={() => navigate(PATH.login) }>Log in</Button>
        </div>
      </Container>
    </header>
  );
};
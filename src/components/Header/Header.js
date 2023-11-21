import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// constants
import {PATH} from '../../constants/paths';

// slices
import {authActions} from '../../store/slices/auth.slice';
import {userActions} from '../../store/slices/user.slice';

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
  const loggedIn = useSelector((state) => Boolean(state.auth.accessToken));
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.reset());
    dispatch(userActions.reset());
  }

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
          {loggedIn ? (
              <Button color="primary" onClick={handleLogout}>Log out</Button>
            ) : (
              <Button color="primary" onClick={() => navigate(PATH.login) }>Log in</Button>
            )
          }
        </div>
      </Container>
    </header>
  );
};
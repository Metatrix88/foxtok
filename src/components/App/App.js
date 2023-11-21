import React, {Suspense, useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

// constants
import {PATH} from '../../constants/paths';

// components
import { Header } from '../Header';
import { Container } from '../Container';
import { SideBar } from '../SideBar';
import { Loader } from '../Loader';

// styles
import './App.css';

export const App = () => {
  const loggedOut = useSelector((state) => !state.auth.accessToken)
  const navigate = useNavigate();

  useEffect(() => {
    if(loggedOut) {
      navigate(PATH.login);
    }
  },[loggedOut]);

  return (
    <>
      <Header/>
      <Container className="main">
        <SideBar/>
        <section className="content">
          <Suspense fallback={<Loader/>}>
            <Outlet/>
          </Suspense>
        </section>
      </Container>
    </>
  );
}


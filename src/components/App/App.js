import React, {Suspense, useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

// constants
import {authStatuses} from '../../constants/authStatuses';
import {PATH} from '../../constants/paths';

// components
import { Header } from '../Header';
import { Container } from '../Container';
import { SideBar } from '../SideBar';
import { Loader } from '../Loader';

// styles
import './App.css';

export const App = () => {
  const authStatus = useSelector((state) => state.auth.status !== authStatuses.loggedIn)
  const navigate = useNavigate();

  useEffect(() => {
    if(authStatus) {
      navigate(PATH.login);
    }
  },[authStatus]);

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


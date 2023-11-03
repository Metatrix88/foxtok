import React, {Suspense} from 'react';
import { Outlet } from 'react-router-dom';

// components
import { Header } from '../Header';
import { Container } from '../Container';
import { SideBar } from '../SideBar';
import { Loader } from '../Loader';

// styles
import './App.css';

export const App = () => {

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


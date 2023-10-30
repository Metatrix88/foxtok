import React, {Suspense} from 'react';

// containers
import { Posts } from '../../containers/Posts';

// components
import { Sprite } from '../Sprite';
import { Header } from '../Header';
import { Container } from '../Container';
import { SideBar } from '../SideBar';
import { Loader } from '../Loader';

// styles
import './App.css';


export const App = () => {

  return (
    <>
      <Sprite/>
      <Header/>
      <Container className="main">
        <SideBar/>
        <section className="content">
          <Suspense fallback={<Loader/>}>
            <Posts/>
          </Suspense>
        </section>
      </Container>
    </>
  );
}


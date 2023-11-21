import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { PATH, PAGE } from '../constants/paths';
// import {getPosts, getPostsByAuthor} from '../services/posts';

import { App } from '../components/App';
import { SystemLayout } from '../components/SystemLayout';
import { StaticPage } from '../components/StaticPage';
import { ErrorBoundary } from '../components/ErrorBoundary';

import { Posts } from '../pages/Posts';
import {Login} from '../pages/Login';



// const About = lazy(() => import('../pages/About'));
// const Contact = lazy(() => import('../pages/Contact'));
// const Careers = lazy(() => import('../pages/Careers'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout/>}>
      <Route errorElement={<ErrorBoundary/>}>
        <Route path={PATH.login} element={<Login/>} />
        <Route
          path={PATH.main}
          element={<App/>}
        >
          <Route errorElement={<ErrorBoundary/>}>
            <Route
              path={PATH.index}
              element={<Posts />}
              // loader={async () => ({ posts: getPosts() })}
            />
            <Route
              path={PAGE.search}
              element={<Posts />}
              // loader={({ request}) => {
              //   const url = new URL(request.url);
              //   const query = url.searchParams.get('q');
              //   return { posts: getPostsByAuthor(query) }
              // }}
            ></Route>
            <Route path=":staticPage" element={<StaticPage />} />
            {/*<Route path={PAGE.about} element={<About />} />*/}
            {/*<Route path={PAGE.contact} element={<Contact />} />*/}
            {/*<Route path={PAGE.careers} element={<Careers />} />*/}
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

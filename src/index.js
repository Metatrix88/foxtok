import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

import reportWebVitals from './reportWebVitals';
import { Loader } from './components/Loader';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider
    router={router}
    fallbackElement={<Loader/>}
  />
);

reportWebVitals();

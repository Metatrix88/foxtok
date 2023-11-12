import React from 'react';
import {Provider} from 'react-redux';
import {Outlet, ScrollRestoration} from 'react-router-dom';

import {Sprite} from '../Sprite';
import {store} from '../../store';

export const SystemLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Sprite />
      <Provider store={ store }>
        <Outlet />
      </Provider>
    </>
  )
};
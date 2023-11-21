import React from 'react';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {Outlet, ScrollRestoration} from 'react-router-dom';

import {persistor, store} from '../../store';
import {Sprite} from '../Sprite';

export const SystemLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Sprite />
      <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
          <Outlet />
        </PersistGate>
      </Provider>
    </>
  )
};
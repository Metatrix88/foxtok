import React from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import {Sprite} from '../Sprite';

export const SystemLayout = () => {
  return (
    <>
      <ScrollRestoration/>
      <Sprite/>
      <Outlet/>
    </>
  )
};
import React from 'react';

import loadingImg from '../../assets/images/loading.gif';

import './Loader.css';

export const Loader = () => (
  <div  className='loader'>
    <img src={loadingImg} alt='loading...'/>
  </div>
);

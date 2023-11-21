import React from 'react';

import loadingImg from '../../assets/images/loading.gif';

import './Loader.css';

export const Loader = ({ loading, children}) => {
  if (loading) {
    return (
      <div className='loader'>
        <img src={loadingImg} alt='loading...'/>
      </div>
    );
  }
  return children;
};

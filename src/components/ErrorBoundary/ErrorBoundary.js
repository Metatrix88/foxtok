import React from 'react';
import { useRouteError } from 'react-router-dom';

import { Error } from '../../icons';

import './ErrorBoundary.css';

export const ErrorBoundary = () => {
  const error = useRouteError();
  let message = 'Something went wrong';

  if (error.message === '204') {
    message = 'No data to display'
  }

  if (error.message === '404') {
    message = '404. Page not found'
  }

  return (
    <div className="error-boundary">
      <Error className="error-boundary__icon" />
      <h3 className="error-boundary__message">{message}</h3>
    </div>
  );
}
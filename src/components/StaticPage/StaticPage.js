import React from 'react';
import {useParams} from 'react-router-dom';
import {STATIC_CONTENT} from '../../constants/staticContent';

export const StaticPage = () => {
  const { staticPage } = useParams();
  const content = STATIC_CONTENT[staticPage]

  if(!content) {
    throw new Error('404');
  }

  return (
    <>
      <h1>{content.title}</h1>
      {content.text.split('\n').map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  )
};
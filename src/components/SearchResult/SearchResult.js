import React, {useEffect, useState} from 'react';
import {getPosts} from '../../services/posts';

import './SearchResult.css';

const reg = /[^a-z0-9]/;

const toSearchableString = (str) => str.toLowerCase().replace(reg, '');

export const SearchResult = ({ query }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    if(!query) {
      setState(null);
      return;
    }

    getPosts()
      .then((posts) => {
        const value = toSearchableString(query);
        const results = posts.filter(({ author }) => toSearchableString(author).includes(value));

        if (!results.length) {
          throw new Error('No data');
        }

        setState(results);
      })
      .catch((error) => {
        setState(null);
        console.log(error.message)
      });
  }, [query]);

  if(!state) {
    return null;
  }

  return (
    <ul className="search-result">
      {state.map(({ id, author, avatar, altText }) => (
        <li key={id} className="search-result__item">
          <img src={avatar} alt={altText} className="search-result__image"/>
          <strong>{author}</strong>
        </li>
      ))}
    </ul>
  );
};
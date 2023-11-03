import React, {useEffect, useState} from 'react';
import { getPostsByAuthor } from '../../services/posts';

import './SearchResult.css';

export const SearchResult = ({ query, open }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    if(!query || !open) {
      setState(null);
      return;
    }

    getPostsByAuthor(query)
      .then((posts) => {
        setState(posts);
      })
      .catch((error) => {
        setState(null);
        console.log(error.message)
      });
  }, [query, open]);

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
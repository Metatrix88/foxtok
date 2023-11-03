import React, {useDeferredValue, useEffect, useRef, useState} from 'react';
import {Form, useSearchParams} from 'react-router-dom';

import {SearchResult} from '../SearchResult';
import {useClickOutside} from '../../hooks/useClickOutside';

import { Search as SearchIcon } from '../../icons';

import './Search.css';
import {PATH} from '../../constants/paths';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const deferredQuery = useDeferredValue(query)
  let [searchParams] = useSearchParams();
  const ref = useClickOutside(() => setQuery(''))

  useEffect(() => {
    const q = searchParams.get('q');

    if (q) {
      setQuery(q);
    }
  }, [searchParams])

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleFocus = (event) => {
    setIsFocus(true);
    setQuery(event.target.value)
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <Form ref={ref} className="search" method="get" action={PATH.search}>
      <div className="search__wrap">
        <input
          name='q'
          className="search__input"
          type="text"
          placeholder="Search accounts and videos"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={query}
        />
        <span className="search__border"></span>
        <span className="search__splitter"></span>
        <button className="search__submit" type="submit">
          <SearchIcon className='search__icon'></SearchIcon>
        </button>
      </div>
      <SearchResult query={deferredQuery} open={isFocus}/>
    </Form>
  );
};
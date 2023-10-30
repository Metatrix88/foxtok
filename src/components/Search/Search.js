import React, {useDeferredValue, useRef, useState} from 'react';

import { Search as SearchIcon } from '../../icons';

import './Search.css';
import {SearchResult} from '../SearchResult';
import {useClickOutside} from '../../hooks/useClickOutside';

export const Search = () => {
  const [query, setQuery] = useState(null);
  const deferredQuery = useDeferredValue(query)
  const ref = useClickOutside(() => setQuery(null))

  const handleSearch = (event) => {
    setQuery(event.target.value)
  }

  return (
    <form ref={ref} className="search">
      <div className="search__wrap">
        <input
          className="search__input"
          type="text"
          placeholder="Search accounts and videos"
          onChange={handleSearch}
          onFocus={handleSearch}
        />
        <span className="search__border"></span>
        <span className="search__splitter"></span>
        <button className="search__submit" type="submit">
          <SearchIcon className='search__icon'></SearchIcon>
        </button>
      </div>
      <SearchResult query={deferredQuery}/>
    </form>
  );
};
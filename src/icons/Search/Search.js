import React, {memo} from 'react';

export const Search = memo( ({ className }) => (
  <svg className={ className }>
    <use href="#search"/>
  </svg>
));

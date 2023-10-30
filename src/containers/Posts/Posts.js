import React, {Fragment} from 'react';

import {fetchData, wrapPromise} from '../../lib/wrapPromise';
import {postsURL} from '../../services/constants';

import {Post} from '../../components/Post';
import {PostContextProvider} from '../../contexts/Post.context';

export const Posts = () => {
  const posts = wrapPromise(fetchData(postsURL));

  return (
    <PostContextProvider>
      {posts.map((data, index) => (
        <Fragment key={data.id}>
          <Post {...data} />
          {posts.length - 1 > index ? <hr/> : null}
        </Fragment>
      ))}
    </PostContextProvider>
  );
};
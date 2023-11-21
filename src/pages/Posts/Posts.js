import React, {Fragment} from 'react';

import {Post} from '../../components/Post';
import {PostContextProvider} from '../../contexts/Post.context';
import {useGetPostsQuery} from '../../services/posts';
import {Loader} from '../../components/Loader';


export const Posts = () => {
  const { data: posts = [], isLoading } = useGetPostsQuery();

  return (
    <Loader loading={isLoading}>
      <PostContextProvider>
        {posts.map((data, index) => (
          <Fragment key={data.id}>
            <Post {...data} />
            {posts.length - 1 > index ? <hr/> : null}
          </Fragment>
        ))}
      </PostContextProvider>
    </Loader>
  );
};
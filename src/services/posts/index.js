import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { postsURL } from '../../constants/apiUrls';
import {createCustomBaseQuery} from '../customBaseQuery';

export const  getPosts = async () => {
  const { data: posts } = await axios.get(postsURL);
  return posts;
};

const reg = /[^a-z0-9]/;

const toSearchableString = (str) => str.toLowerCase().replace(reg, '');

export const getPostsByAuthor = async (query) => {
  const posts = await getPosts();
  const value = toSearchableString(query);
  const results = posts.filter(({ author }) => toSearchableString(author).includes(value));

  if (!results.length) {
    throw new Error('204');
  }

  return results;
};

export const posts = createApi({
  reducerPath: 'postsApi',
  baseQuery: createCustomBaseQuery(postsURL),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPostsQuery } = posts;

import axios from 'axios';

import { postsURL } from '../../constants/apiUrls';

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
}
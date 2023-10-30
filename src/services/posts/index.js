import axios from 'axios';

import { postsURL } from '../constants';

export const  getPosts = async () => {
  const { data: posts } = await axios.get(postsURL);
  return posts;
}
import { useEffect, useState } from 'react';
import { getPosts } from '../services/posts';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error.message)
      });
  }, []);

  return posts;
}
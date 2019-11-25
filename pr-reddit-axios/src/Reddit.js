import React, { useState, useEffect } from 'react';
import axios from 'axios';

const isEmpty = (obj) => {
  if (obj === null) return true;
  if (obj.length === 0) return true;
  if (typeof (obj) !== 'object') return true;
  if (Object.keys(obj).length === 0) return true;
  return false;
}

const Reddit = ({ subreddit }) => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => {
        const posts = response.data.data.children.map(obj => obj.data);
        setPosts(posts);
      })
  }, [subreddit, setPosts]);

  console.log(posts);
  return (
    <div>
      <h3>{`/r/${subreddit}`}</h3>
      <ul>
        {!isEmpty(posts) && posts.map(post =>
          <li key={post.id}>
            <a href={`https://www.reddit.com${post.permalink}`}>{post.title}</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Reddit;

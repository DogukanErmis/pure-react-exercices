import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Reddit({ subreddit }) {
  // Initialize state to hold the posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the data when the component mounts
    console.log('fetch data');
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => res.json())
      .then((json) => setPosts(json.data.children.map((c) => c.data)));
  }, [subreddit, setPosts]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
ReactDOM.render(
  <Reddit subreddit="reactjs" />,
  document.querySelector('#root')
);

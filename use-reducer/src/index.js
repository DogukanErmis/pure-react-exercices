import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Reddit() {
  // Initialize state to hold the posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the data when the component mounts
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((res) => res.json())
      .then((json) => setPosts(json.data.children.map((c) => c.data)));
  }, [setPosts]);
  // <-- we didn't pass the 2nd arg. what will happen?

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
ReactDOM.render(<Reddit />, document.querySelector('#root'));

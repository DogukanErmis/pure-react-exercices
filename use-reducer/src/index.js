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

function App() {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit.
  const [inputValue, setValue] = useState('reactjs');
  const [subreddit, setSubreddit] = useState(inputValue);

  // Update the subreddit when the user presses enter
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubreddit(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setValue(e.target.value)} />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

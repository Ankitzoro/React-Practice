import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowSize from './hooks/useWindowSize';
import useFetch from './hooks/useFetch';

function App() {
  const [name, setName] = useLocalStorage('name', '');
  const { width, height } = useWindowSize();
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Custom Hooks Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>useLocalStorage</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Stored name: {name || 'Not set'}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>useWindowSize</h3>
        <p>Window width: {width}px</p>
        <p>Window height: {height}px</p>
      </div>

      <div>
        <h3>useFetch</h3>
        {loading && <p>Loading posts...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {posts && (
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
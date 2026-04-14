// App.js
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  // Effect runs once on mount
  useEffect(() => {
    console.log('Component mounted');
    fetchData();
    
    // Cleanup function
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  // Effect runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>useEffect Demo</h1>
      <h3>Post Title: {data?.title}</h3>
      <p>Post Body: {data?.body}</p>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default DataFetcher;
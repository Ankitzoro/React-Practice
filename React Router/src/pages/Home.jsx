// pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <p>Welcome to the React Router demo!</p>
      <button onClick={() => navigate('/about')}>
        Go to About Page
      </button>
    </div>
  );
}

export default Home;
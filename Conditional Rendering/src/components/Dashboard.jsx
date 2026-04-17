import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
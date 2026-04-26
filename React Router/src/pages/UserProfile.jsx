import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
      <p>Current Path: {location.pathname}</p>
    </div>
  );
}
export default UserProfile;
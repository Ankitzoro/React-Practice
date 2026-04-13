// App.js
import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreeTerms: false
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h2>Registration Form</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              I agree to the terms
            </label>
          </div>
          <button type="submit" style={{ marginTop: '20px' }}>Register</button>
        </form>
      ) : (
        <div>
          <h3>Registration Successful!</h3>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
// LoginPage.jsx
import React, { useState } from 'react';

function loginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        setError('Invalid username or password');
      } else {
        // Redirect to homepage on successful login
        window.location.replace('/');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}




export default loginPage;

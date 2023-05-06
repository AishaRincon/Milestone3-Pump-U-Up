import React, { useState } from 'react';
import {Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../App.css';


function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

const handleLoginSubmit = async (e) => {
  e.preventDefault();
  try {
    // const response = await fetch('/api/users/login', {
    console.log('username:', username); // debugging to find out why username is not being sent to backend
    console.log('password:', password); // debugging to find out why password is not being sent to backend
    const response = await fetch(`http://localhost:8080/api/users/login`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    // handle response from backend here
    if(response.status === 200) {
      // localStorage.setItem('username', data.username);
      localStorage.setItem('token', data.token);
      console.log('login successful');
      // redirect to userHome
      navigate('/userHome');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


const handleSignUpSubmit = async (e) => {
  e.preventDefault();
// check if username is already taken
// if username is taken, display error message (choose another username)
// if username is not taken, create new user and redirect to userHome
try {
  console.log('username:', username); // debugging to find out why username is not being sent to backend
  console.log('password:', password); // debugging to find out why password is not being sent to backend
  const response = await fetch('http://localhost:8080/api/users/signup', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'credentials': 'include' 
    },
    body: JSON.stringify({ username, password, email })
  });
  const data = await response.json();
  console.log('data:', data);
  console.log(response)
  // handle response from backend here
  if(response.status === 200) {
    console.log('signup successful');
    // message to user that signup was successful
    // document.getElementById('message').textContent = 'Account created. Let\'s Pump-U-Up!';
    // redirect to userHome
    navigate('/userHome');
  }
} catch (error) {
    console.error('Error:', error);
    // message to user that signup was unsuccessful
    // document.getElementById('message').textContent = 'Sign up failed. If at first you don\'t succeed, try, try again';
}



}

  return (
    <>
      <div className="welcome">
        <h3>Let's get ready to... Pump-U-Up!</h3>
        <p>Create an account and start tracking your workouts as you progress from wimp to stud.</p>
      </div>
      <div className="button-container">
        <div className="log-in-button">
          <Button variant="primary" onClick={handleLoginClick}>
            {showLoginForm ? 'Cancel' : 'Login'}
          </Button>
        </div> 
        <div className="sign-up-button">
          <Button variant="primary" onClick={handleSignUpClick}>
            {showSignUpForm ? 'Cancel' : 'Sign Up'}
          </Button>
        </div>
      </div>
      {showLoginForm && (
      <Card>
        <Card.Body>
          <Form onSubmit={handleLoginSubmit} className='login-form card-container login-card'>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username </Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} required />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">Submit</Button>
            </div>
            <div id="message"></div>
          </Form>
        </Card.Body>
      </Card>
        )}
        {showSignUpForm && (
          <Card>
          <Card.Body>
          <Form onSubmit={handleSignUpSubmit} className='sign-up-form sign-card-container sign-up-card'>
            <Form.Group controlId="formBasicUsername"> {/* form-group is a bootstrap class */} 
              <Form.Label>Username</Form.Label> 
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
              <Form.Label>Password</Form.Label> 
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
              <Form.Label>Email</Form.Label> 
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">Let's Pump-U-Up!</Button>
            </div>
          </Form>
          </Card.Body>
      </Card>
        )}
    </>
  );
}

export default LoginPage;




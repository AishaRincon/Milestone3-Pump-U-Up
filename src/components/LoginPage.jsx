import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import '../assets/logo.png';
import '../App.css';


function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//  //does this need to go to the backend for authentication??
// }
const handleLoginSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    // handle response from backend here
  } catch (error) {
    console.error('Error:', error);
  }
};
  const handleLoginSubmit = (e) => {
    e.preventDefault();
 //check if username and password are correct
    
    //if correct, redirect to userHome
    //if incorrect, display error message (username or password is incorrect)


}

const handleSignUpSubmit = (e) => {
  e.preventDefault();
// check if username is already taken
// if username is taken, display error message (choose another username)
// if username is not taken, create new user and redirect to userHome



}

  return (
    <>
     <div className="container">
                <img className="logo"
                    src={require("../assets/logo.png")}
                    alt="Pump-U-Up logo, a barbell with weights and a muscular arm busting through the middle saying 'Pump-U-Up'." />
      </div>
      <div className="container">
        <div className="log-in-button"></div> {/* should this container have a different name? */}
          <Button variant="primary" onClick={handleLoginClick}>
            {showLoginForm ? 'Cancel' : 'Login'}
          </Button>
        </div>
        <div className="sign-up-button">
          <Button variant="primary" onClick={handleSignUpClick}>
            {showSignUpForm ? 'Cancel' : 'Sign Up'}
          </Button>
        </div>
        {showLoginForm && (
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="formBasicUsername"> {/* form-group is a bootstrap class */} 
              <Form.Label>Username</Form.Label> 
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
              <Form.Label>Password</Form.Label> 
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">Submit</Button>
            </div>
          </Form>
        )}
        {showSignUpForm && (
          <Form onSubmit={handleSignUpSubmit}>
            <Form.Group controlId="formBasicUsername"> {/* form-group is a bootstrap class */} 
              <Form.Label>Username</Form.Label> 
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
              <Form.Label>Password</Form.Label> 
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">Sign Up</Button>
            </div>
          </Form>
        )}
    </>
  );
}

export default LoginPage;


// return (
//   <>
//       <Link className="container" to="/">
//           <img className="logo"
//               src={require("../img/home.png")}
//               alt="Buck-It's logo, a bucket with a rainbow coming out of it saying 'home'." />
//       </Link>
//       <h1 className="cat-title">❝{props.category.title}❞</h1>
//       <div className="flex">
//           <button onClick={() => setClicked(!clicked)}>I have a new idea!</button></div>
//       {clicked
//           ? <ListForm id={props.category.category_id} />
//           : null
//       }
//       {mapLists}
//   </>
// )
// }

// export default CategoryPage;

// <button onClick={() => setClicked(!clicked)}>I have a new idea!</button></div>
//       {clicked
//           ? <ListForm id={props.category.category_id} />
//           : null


//           function CategoryPage(props) {
//             const [clicked, setClicked] = useState(false);

import React, { useState } from 'react';
import loginPage from './loginPage.jsx';

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
  return(
    <div className = "login-wrapper">
        <h1>Welcome to Pump-U-Up</h1>
        <form>
            {/* on change for login, username, and password */}
            <div>
            <lable>
            <p>username</p>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </lable>
            <lable>
            <p>password</p>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </lable>
            </div>
                <div>
                <button type="submit">Login</button>
                </div>
            {/* on submit for create account? */}
        </form>
    </div>
  )
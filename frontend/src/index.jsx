import React from 'react';
import { ReactDOM } from 'react-dom';
import App from './src/App';
import './index.css';
import { Nav, NavLink, NavMenu } 
import loginPage from '../frontend/components/loginPage';
import ActivityDetailsPage from '../frontend/components/activityDetailsPage';
import HomePage from '../frontend/components/homePage';
import ErrorPage from './../components/errorPage';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            HomePage
          </NavLink>
          <NavLink to="/activityDetails" activeStyle>
            ActivityDetailsPage
          </NavLink>
          <NavLink to="/login" activeStyle>
            loginPage
          </NavLink>
          <NavLink to="/errorPage" activeStyle>
            404Page
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default index;
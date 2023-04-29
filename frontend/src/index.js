import React from 'react';
import './index.css';
import { Nav, NavLink, NavMenu } 
import loginPage from './../components/loginPage';
import ActivityDetailsPage from './../components/activityDetailsPage';
import HomePage from './../components/homePage';
    from "./NavbarElements";
  
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
  
export default Navbar;
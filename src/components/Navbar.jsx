import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/userHome" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/loginPage" className="nav-link">
            log out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
// import React from 'react';
// import { ReactDOM } from 'react';
// import App from './App';
// import './index.css';
// import { Nav, NavLink, NavMenu }
// import loginPage from '../frontend/components/loginPage';
// import ActivityDetailsPage from './../components/activityDetailsPage';
// import HomePage from '../frontend/components/workoutList';
// import ErrorPage from './../components/errorPage';

// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <NavMenu>
//           <NavLink to="/home" activeStyle>
//             HomePage
//           </NavLink>
//           <NavLink to="/activityDetails" activeStyle>
//             ActivityDetailsPage
//           </NavLink>
//           <NavLink to="/login" activeStyle>
//             loginPage
//           </NavLink>
//           <NavLink to="/errorPage" activeStyle>
//             404Page
//           </NavLink>
//         </NavMenu>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;

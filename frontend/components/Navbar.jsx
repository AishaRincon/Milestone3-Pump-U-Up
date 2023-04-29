import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Workout Details
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/workoutList" className="nav-link">
            Workout List
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addWorkoutForm" className="nav-link">
            Add Workout Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/activityDetails" className="nav-link">
            Activity Details
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

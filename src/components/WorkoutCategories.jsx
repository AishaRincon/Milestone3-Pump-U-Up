// workout Categories
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function WorkoutCategories ({ activities }) {
  return (
    <div>
      {/* <Navbar/> */}
      <h1>Choose your workout!</h1>
      <div className="workouts-container">
        <Link to="/cardio" className="box">
          Cardio
        </Link>
        <Link to="/upper-body" className="box">
          Upper Body
        </Link>
        <Link to="/lower-body" className="box">
          Lower Body
        </Link>
        <Link to="/core" className="box">
          Core
        </Link>
      </div>
    </div>
  );
}

export default WorkoutCategories;



import React from 'react';
import { Link } from 'react-router-dom';

const AddWorkoutForm = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <h1>Add Workout</h1>
      {/* form goes here */}
    </div>
  );
};

export default AddWorkoutForm;

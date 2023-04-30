import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const WorkoutDetailHistory = ({ workoutHistory }) => {
  return (
    <div>
      <Navbar />
      <h2>Workout History</h2>
      {workoutHistory.length === 0 ? (
        <p>No workout history available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Workout Name</th>
              <th>Duration</th>
              <th>Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            {workoutHistory.map((workout) => (
              <tr key={workout.id}>
                <td>{workout.date}</td>
                <td>{workout.name}</td>
                <td>{workout.duration}</td>
                <td>{workout.caloriesBurned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/add-workout">Add Workout</Link>
    </div>
  );
};

export default WorkoutDetailHistory;

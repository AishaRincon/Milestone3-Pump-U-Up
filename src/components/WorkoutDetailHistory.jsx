import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

import { useState, useEffect } from 'react';

function WorkoutDetailHistory(props) {
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    async function fetchWorkout() {
      try {
        // const response = await fetch(`${process.env.REACT_APP_FETCH_URI}/api/workouts/${props.id}`);
        const response = await fetch(`http://localhost:8080/api/workouts/${props.id}`);
        const data = await response.json();
        setWorkout(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchWorkout();
  }, [props.id]);

  if (!workout) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{workout.name}</h2>
      <p>{workout.description}</p>
      <ul>
        {workout.exercises.map(exercise => (
          <li key={exercise.id}>
            <strong>{exercise.name}</strong>: {exercise.sets} x {exercise.reps}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutDetailHistory;

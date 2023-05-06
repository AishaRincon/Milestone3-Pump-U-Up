import { useState, useEffect } from 'react';

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

//   useEffect(() => {
//     // Fetch workouts data from an API
//     fetch('https://example.com/api/workouts')
//       .then(response => response.json())
//       .then(data => setWorkouts(data))
//       .catch(error => console.error(error));
//   }, []);

//   useEffect(() => {
//     async function fetchWorkouts() {
//       const response = await fetch('http://localhost:8080/api/workouts');
//       const data = await response.json();
//       setWorkouts(data);
//     }
//     fetchWorkouts();
  }
// )}

export default WorkoutList;

// import { useState, useEffect } from 'react';

// function WorkoutList() {
//   const [workouts, setWorkouts] = useState([]);

//   useEffect(() => {
//     // Fetch workouts data from an API
//     fetch('https://example.com/api/workouts')
//       .then(response => response.json())
//       .then(data => setWorkouts(data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Workout List</h1>
//       <ul>
//         {workouts.map(workout => (
//           <li key={workout.id}>
//             <h2>{workout.name}</h2>
//             <p>{workout.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default WorkoutList;

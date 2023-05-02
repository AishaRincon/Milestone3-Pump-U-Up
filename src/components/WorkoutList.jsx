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

  useEffect(() => {
    async function fetchWorkouts() {
      const response = await fetch('http://localhost:8080/api/workouts');
      const data = await response.json();
      setWorkouts(data);
    }
    fetchWorkouts();
  }
)}

// export default WorkoutList;

export default workoutList;

{/* Hey Jenn, I think this code should go below the function

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    async function fetchWorkouts() {
      const { data: workouts, error } = await supabase   //idk if this is right or how to fetch data from supabase
        .from('workouts') //name of column from supabase
        .select('*')
        .order('date', { ascending: false }); //order by date descending
      if (error) console.log(error);
      else setWorkouts(workouts);
    }
    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1>Workout List</h1>
      <Link to="/workouts/new" className="btn btn-primary mb-3">Add New Workout</Link> //add new workout button
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>
          //link to workout details page? (where the user can look at workout history)
            <Link to={`/workouts/${workout.id}`} className="btn btn-link">{workout.name} ({workout.date})</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
}


*/}

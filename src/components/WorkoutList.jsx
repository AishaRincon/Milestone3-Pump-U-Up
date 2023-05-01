import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
{/* import supabase? */}

function workoutList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    async function fetchWorkouts() {
      const response = await fetch('http://localhost:4000/api/workouts');
      const data = await response.json();
      setWorkouts(data);
    }
    fetchWorkouts();
  }
)}


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

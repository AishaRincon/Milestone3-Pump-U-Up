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
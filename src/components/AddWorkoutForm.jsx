import React, { useState } from "react";

function AddWorkoutForm({ onAdd }) {
  const [workout, setWorkout] = useState("");
  const [date, setDate] = useState("");
  // const [duration, setDuration] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWorkout = { workout, date };
    onAdd(newWorkout);
    setWorkout("");
    setDate("");
  //   setDuration("");
   };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="workout">Workout:</label>
        <input
          type="text"
          id="workout"
          value={workout}
          onChange={(event) => setWorkout(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </div>
      <div>
        {/* <label htmlFor="duration">Duration (minutes):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          required
        /> */}
      </div>
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default AddWorkoutForm;

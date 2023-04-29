// ActivityDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ActivityDetailsPage() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/activities/${id}`)
      .then(res => res.json())
      .then(
        data => {
          setActivity(data);
        },
        error => {
          setError(error);
        }
      );
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!activity) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Activity Details Page</h1>
        <h2>{activity.name}</h2>
        <p>{activity.description}</p>
        <p>Duration: {activity.duration} minutes</p>
      </div>
    );
  }
}

export default ActivityDetailsPage;


// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ activities }) {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <Link to={`/activity/${activity.id}`}>{activity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;


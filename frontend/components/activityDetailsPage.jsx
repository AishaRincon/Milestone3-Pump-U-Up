// ActivityDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function ActivityDetailsPage() {
  const { id } = useParams();
  // Fetch activity details based on id

  return (
    <div>
      <h1>Activity Details Page</h1>
      {/* Display activity details */}
    </div>
  );
}

export default ActivityDetailsPage;

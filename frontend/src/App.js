import './App.css';
// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ActivityDetailsPage from './ActivityDetailsPage';
import ErrorPage from './ErrorPage';

function App() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/activities')
      .then(res => res.json())
      .then(
        data => {
          setActivities(data);
        },
        error => {
          setError(error);
        }
      );
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage activities={activities} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/activity/:id" element={<ActivityDetailsPage />} />
          <Route path="*" element={<ErrorPage error={error} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import WorkoutDetailHistory from './components/WorkoutDetailHistory';
import FourOhFourPage from './components/FourOhFourPage';

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
          <Route path="/activity/:id" element={<WorkoutDetailHistory />} />
          <Route path="/*" element={<FourOhFourPage error={error} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
// import HomePage from './components/HomePage';
import WorkoutDetailHistory from './components/WorkoutDetailHistory';
import FourOhFourPage from './components/FourOhFourPage';
import WorkoutCategories from './components/WorkoutCategories';
import UpperBody from './components/UpperBody';
import LowerBody from './components/LowerBody';
import Core from './components/Core';


function App() {
  // const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('/api/activities')
  //     .then(res => res.json())
  //     .then(
  //       data => {
  //         setActivities(data);
  //       },
  //       error => {
  //         setError(error);
  //       }
  //     );
  // }, []);

  return (
    <>
    <Router>
      
      <div>
        <Navbar />
        <h1>Pump-U-Up</h1>
        <img className="logo"
                    src={require("./assets/logo.png")}
                    alt="Pump-U-Up logo, a barbell with weights and a muscular arm busting through the middle saying 'Pump-U-Up'." />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/userHome" element={<WorkoutCategories />} />
          <Route path="/activity/:id" element={<WorkoutDetailHistory />} />
          <Route path='/logout' element={<LoginPage />} />
          <Route path="/*" element={<FourOhFourPage error={error} />} />
          <Route path="/upper-body" element={<UpperBody />} />
        <Route path="/lower-body" element={<LowerBody />} />
        <Route path="/core" element={<Core />} />
          
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;


import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import login from './pages/about';
import activityDetail from './pages/signup';
import navbar from './pages/signup';
import errorPage from './pages/contact';
  

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<login/>} />
          <Route path='/activityDetail' element={<activityDetail/>} />
          <Route path='/navbar' element={<Navbar/>} />
          <Route path='/errorPage' element={<errorPage/>} />
      </Routes>
      </Router>
  );
  }
    
  export default App;

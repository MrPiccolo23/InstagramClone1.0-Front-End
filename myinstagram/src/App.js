import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';
import { UserContext } from './Components/UserContext';  // <-- Make sure this import path is correct

function App() {
  const isAuthenticated = Boolean(localStorage.getItem("users"));
  const [userId, setUserId] = useState(null);  // <-- Add this

  return (
    <UserContext.Provider value={{ userId, setUserId }}>  
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>  // <-- And this
  );
}

export default App;

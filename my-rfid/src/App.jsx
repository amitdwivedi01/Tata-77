import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserScreen from './UserScreen';
import AdminDashboard from './AdminDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserScreen />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

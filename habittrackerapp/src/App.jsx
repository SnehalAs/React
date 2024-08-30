import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HabitPage from './pages/HabitPage';
import SettingsPage from './pages/SettingsPage';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habits" element={<HabitPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import './index.css';

const JobAlerts = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Job alert created!');
  };

  return (
    <div className="job-alerts">
      <h1>Set Up Job Alerts</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword">Keyword:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          required
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Create Alert</button>
      </form>
    </div>
  );
};

export default JobAlerts;

import React, { useState } from 'react';
import './index.css';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="resume">Upload Resume:</label>
        <input
          type="file"
          id="resume"
          onChange={(e) => setResume(e.target.files[0])}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;

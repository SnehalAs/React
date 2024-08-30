import React, { useState } from 'react';
import './index.css';

const JobDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resume, setResume] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted!');
    setIsModalOpen(false);
  };

  return (
    <div className="job-details">
      <h1>Software Engineer</h1>
      <p>Company: TechCorp</p>
      <p>Location: San Francisco</p>
      <p>Description: Develop and maintain software applications.</p>
      <button onClick={openModal}>Apply Now</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Apply for Job</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="resume">Upload Resume:</label>
              <input
                type="file"
                id="resume"
                required
                onChange={(e) => setResume(e.target.files[0])}
              />
              <button type="submit">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;

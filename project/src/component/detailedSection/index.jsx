import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { FaStar, FaLocationDot, FaBriefcase } from "react-icons/fa6";
import Header from "../header";
import SimilarJobs from "../similarJobSection";
import "./index.css";

const DetailedSection = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", resume: null });
  const [isApplied, setIsApplied] = useState(false);

  const token = Cookies.get("jwtToken");

  useEffect(() => {
    const getDetailedJobsData = async () => {
      const api = `https://apis.ccbp.in/jobs/${id}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);
      const data = await response.json();

      if (response.ok) {
        setJobDetails(data.job_details);
      }
    };

    getDetailedJobsData();
  }, [id, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleApplyJob = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("resume", formData.resume);

    try {
      
      setIsApplied(true);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error applying for job", error);
    }
  };

  if (!jobDetails) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className="detailed-job-section">
        <div className="job-info">
          <div className="job-header">
            <img
              className="job-company-logo"
              src={jobDetails.company_logo_url}
              alt="Company Logo"
            />
            <div className="job-title-rating">
              <h3>{jobDetails.title}</h3>
              <div className="job-rating">
                <FaStar className="rating-icon" />
                <span>{jobDetails.rating}</span>
              </div>
            </div>
            <a 
              href={jobDetails.company_website_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="visit-company-btn"
            >
              Visit 
            </a>
          </div>

          <div className="job-location-type-package">
            <div className="location-employment">
              <FaLocationDot className="mr-1" />
              <span className="mr-3">{jobDetails.location}</span>
              <FaBriefcase className="mr-1" />
              <span>{jobDetails.employment_type}</span>
            </div>
            <h5>{jobDetails.package_per_annum}</h5>
          </div>

          <hr />

          <div className="job-description">
            <h5>Description</h5>
            <p>{jobDetails.job_description}</p>
          </div>

          <hr />

          <div className="apply-job-section">
            <h4>Apply for this Job</h4>
            {isApplied ? (
              <p>You have already applied for this job!</p>
            ) : (
              <form onSubmit={handleApplyJob} className="apply-job-form">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="resume">Upload Resume:</label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Apply Now
                </button>
              </form>
            )}
          </div>
        </div>

        <SimilarJobs jobId={id} />
      </div>
    </>
  );
};

export default DetailedSection;







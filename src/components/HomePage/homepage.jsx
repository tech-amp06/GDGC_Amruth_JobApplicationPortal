import React, { useState, createContext, useEffect } from 'react';
import Filters from '../Filters/filters';
import JobPostings from '../JobPostings/JobPostings';
import JobDetails from '../JobDetails/JobDetails';
import './homepage.css';

export const ChosenJob = createContext(undefined);

function Homepage() {
  const [random, setRandom] = useState(false);
  const [jobPostings, setJobPostings] = useState([]);
  const [chosenJobId, setChosenJobId] = useState("");

  const fetchJobPostings = async () => {
    fetch("https://jsonfakery.com/jobs")
      .then(response => response.json())
      .then(data => {
        setJobPostings(data);
      });
  };

  useEffect(() => {
    fetchJobPostings();
  }, [random]);

  return (
    <>
      <div className="homepage">
        <div className="filters-component">
          <Filters />
          { chosenJobId }
        </div>
        <div className="job-postings-component">
          <ChosenJob.Provider value={{chosenJobId, setChosenJobId}}>
            <JobPostings jobPostings={jobPostings} />
          </ChosenJob.Provider>
        </div>
        <div className="job-details-component">
          {
            chosenJobId.length ? 
            <JobDetails jobDetail={jobPostings.find((job) => job.id === chosenJobId)} /> : 
            <p>None</p>
          }
        </div>
      </div>
    </>
  )
}

export default Homepage
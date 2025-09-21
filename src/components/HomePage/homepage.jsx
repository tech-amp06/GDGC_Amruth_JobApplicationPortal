import React, { useState, createContext, useEffect } from 'react';
import Filters from '../Filters/filters';
import JobPostings from '../JobPostings/JobPostings';
import JobDetails from '../JobDetails/JobDetails';
import './homepage.css';

export const ChosenJob = createContext(undefined);
export const FilterContext = createContext(undefined);

function Homepage() {
  const [random, setRandom] = useState(false);
  const [jobPostings, setJobPostings] = useState([]);
  const [chosenJobId, setChosenJobId] = useState("");
  const [filters, setFilters] = useState({});

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

  useEffect(() => {
    let result = jobPostings.filter((jobPosting) => {
      const jobLocation = jobPosting.location?.split(",")[1]?.toLowerCase().trim();
      return filters.location.includes(jobLocation);
    });

    if (result.length) {
      setJobPostings(result);
    } else {
      fetchJobPostings();
    }
  }, [filters]);

  return (
    <>
      <div className="homepage">
        <div className="filters-component">
          <FilterContext.Provider value={{filters, setFilters}}>
            <Filters />
          </FilterContext.Provider>
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
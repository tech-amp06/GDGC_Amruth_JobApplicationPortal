'use client'
import React, { useState, useEffect, useContext } from 'react';
import JobCard from '../JobCard/jobCard';
import './jobPostings.css';
import { ChosenJob } from '../HomePage/homepage';

function JobPostings({jobPostings}) {
  const {chosenJobId} = useContext(ChosenJob);
  const [range, setRange] = useState(1);

  return (
    <div className='job-postings' style={{ paddingTop: "5px" }}>
      <div className="job-postings-header">
        <div style={{ flex: 1, alignItems: 'center' }} className="desc">
          <h3 style={{ margin: '20px 20px 0', marginLeft: '20px', fontWeight: 'bold' }}>Latest Job Openings</h3>
          <p 
            style={{ color: 'grey', marginLeft: '20px', marginTop: '10px', fontSize: '0.8rem', fontWeight: 500 }}
          >
            { jobPostings.length } jobs found
          </p>
        </div>

        <div className="segments">
          <div style={{ display: 'inline' }}>
            <p style={{ display: 'inline' }}>{30 * (range - 1) + 1} - { 30 * range } of {jobPostings.length}</p>
          </div>

          <div style={{ display: 'inline' }} className="navigate">
            <div style={{ display: 'inline' }} className="next-img">
              <img className='prev' src="https://cdn-icons-png.flaticon.com/512/130/130884.png" alt="next" onClick={() => setRange(range - 1)} />
            </div>
            <div style={{ display: 'inline' }} className="next-img">
              <img className='next' src="https://cdn-icons-png.flaticon.com/512/130/130884.png" alt="next" onClick={() => setRange(range + 1)} />
            </div>
          </div>
        </div>
      </div>

      { 
        jobPostings.slice(30 * (range - 1), 30 * range).map((job) => {
          return (
            <JobCard jobPosting={ job } isChosen={job.id === chosenJobId} key={ job.id } />
          )
        }) 
      }
    </div>
  )
}

export default JobPostings
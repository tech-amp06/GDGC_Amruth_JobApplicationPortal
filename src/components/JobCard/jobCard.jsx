import React from 'react';
import './jobCard.css';
import { useContext } from 'react';
import { ChosenJob } from '../HomePage/homepage';

function JobCard({jobPosting, isChosen}) {
  let qualification = jobPosting.qualifications;
  qualification = qualification.replace('[', '');
  qualification = qualification.replace(']', '');

  const {chosenJobId, setChosenJobId} = useContext(ChosenJob);
  let qualificationList = qualification.replaceAll('"', '').split(',');

  return (
    <div className={'job-card ' + isChosen} onClick={() => {setChosenJobId(jobPosting.id); console.log(chosenJobId);}}>
      <h5>{jobPosting.employment_type}</h5>
      <p className='company'>{jobPosting.company}</p>
      
      <div className="location">
        <img height={12} src="https://cdn-icons-png.flaticon.com/512/67/67347.png" alt="location" />
        <p style={{ display: "inline", marginLeft: "6px" }}>{jobPosting.location}</p>
      </div>
      
      <div className="type">
        <img height={12} src="https://cdn-icons-png.flaticon.com/512/903/903479.png" alt="type" />
        <p style={{ display: "inline", marginLeft: "6px" }}>Full Time</p>
      </div>
      
      <div className="salary-range">
        <img height={12} src="https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-bag-money-icon-vector-isolated-png-image_5181286.png" alt="salary" />
        <p style={{ display: "inline", marginLeft: "6px" }}>${jobPosting.salary_from} - ${jobPosting.salary_to}</p>
      </div>

      <div className="qualification">
        {
          qualificationList.map((skill, index) => {
            return (<p className='skills' key={index}>{skill}</p>)
          })
        }
      </div>

      {
        JSON.parse(localStorage.getItem('role')) === 'seeker' ? 
        <button className='apply'>Apply now</button> : <></>
      }
    </div>
  )
}

export default JobCard;
import './jobDetails.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function JobDetails({jobDetail}) {
  const navigate = useNavigate();
  const [applied, setApplied] = useState(false);

  let qualification = jobDetail.qualifications;
  qualification = qualification.replace('[', '');
  qualification = qualification.replace(']', '');
  
  let qualificationList = qualification.replaceAll('"', '').split(',');

  return (
    <div className="job-details">
      <h3>{ jobDetail.employment_type }</h3>
      <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginTop: '8px' }}>{jobDetail.company}</p>

      <div className="salary-details">
        <p>${jobDetail.salary_from} - ${jobDetail.salary_to}</p>
        <p style={{ color: 'var(--primary)', margin: '5px', fontSize: '0.8rem' }}>per year</p>
      </div>

      <div className="job-description">
        <h5>Job Description</h5>
        <p>{ jobDetail.description }</p>
      </div>

      <div className="requirements">
        <h5>Requirements</h5>
        <ul>
          {qualificationList.map((requirement, index) => {
            return (
              <li style={{ marginTop: '8px' }} key={index}>{requirement}</li>
            )
          })}
        </ul>

        <p>For further information, contact: <span style={{ fontWeight: 'bold' }}>+1 { jobDetail.contact }</span></p>
        <p>Application deadline: <span style={{ fontWeight: 'bold' }}>{ jobDetail.application_deadline }</span></p>

        <div style={{ color: 'grey', fontSize: '0.8rem' }} className="update-times">
          <p style={{ marginBottom: 5 }}>Created: { jobDetail.created_at }</p>
          <p style={{ margin: 0 }}>Updated: { jobDetail.updated_at }</p>
        </div>
      </div>
      
      <button style={{ width: '100%' }} className="apply" onClick={async () => {
        if (!localStorage.getItem('user')) {
          navigate('/login');
        } else {
          setApplied(true);
        }
      }}
    >
      Apply now
      </button>
    </div>
  );
}

export default JobDetails;
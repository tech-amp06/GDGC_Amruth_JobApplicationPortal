import { set, useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import users from '../../assets/users.json';

function SignupPage() {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const { register: firstStep, handleSubmit: handleFirstStep } = useForm();
  const { register: secondStep, handleSubmit: handleSecondStep } = useForm();
  const { register: profileInformation, handleSubmit: handleProfileInformation } = useForm();
  const [proceed, setProceed] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    setUsersList(users);
  }, []);

  const addUser = async (newUser) => {
    if (newUser.role === "recruiter") {
      newUser = { ...newUser, appliedJobs: [], yearsOfExperience: 0, skills: [] };
    } 

    let response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });

    if (response.status === 201) {
      console.log(response);
    }
  }

  return (
    <>
      <div className='login-page'>
        <div style={{ flex: 1, textAlign: 'center', marginTop: 120 }}>
          <img src="https://png.pngtree.com/png-vector/20220720/ourmid/pngtree-job-interview-meeting-recruitment-hiring-png-image_6028818.png" alt="placeholder" />
        </div>

        <div className="section">
          <div className="login-card">
            <h1>Signup</h1>

            {/* First step */}

            { !proceed ?
              <form 
                onSubmit={handleFirstStep((newUser) => {
                  setUserDetails(newUser); 
                  setProceed(true); 
                  console.log(userDetails);
                })} 
                style={{ textAlign: 'center' }}
              >
                <div className="sector">
                  <label>Enter username</label>
                  <input {...firstStep("username")} type="email" name="username" id="username" />
                </div>

                <div className="sector">
                  <label>Enter password</label>
                  <input {...firstStep("password")} type="password" name="password" id="password" />
                </div>

                <div className="sector">
                  <div>
                    <input onChange={(e) => {setRole(e.target.value)}} {...firstStep("role")} style={{ display: 'inline', width: 'fit-content', marginRight: '10px' }} type="radio" name="role" id="seeker" value="seeker" />
                    <label htmlFor="seeker">Seeker</label>
                  </div>

                  <div>
                    <input onChange={(e) => {setRole(e.target.value)}} {...firstStep("role")} style={{ display: 'inline', width: 'fit-content', marginRight: '10px' }} type="radio" name="role" id="recruiter" value="recruiter" />
                    <label htmlFor="recruiter">Recruiter</label>
                  </div>
                </div>

                <button className='login-btn' type="submit">Proceed</button>
              </form> : null
            }

            {/* Second step */}

            { proceed ? 
              (
              <form 
                onSubmit={handleSecondStep(async (moreDetails) => {
                  const newUser = { ...userDetails, ...moreDetails };
                  setUserDetails(newUser);
                })} 
                style={{ textAlign: 'center' }}
              >
                <div className="sector">
                  <label>Enter full name</label>
                  <input {...secondStep("name")} type="text" name="name" id="name" />
                </div>

                {
                  userDetails.role === "recruiter" ?
                    <div className="sector">
                      <label>Enter company name</label>
                      <input {...secondStep("companyName")} type="text" name="companyName" id="companyName" />
                    </div> : null
                }

                <div style={{ textAlign: 'left', fontSize: '0.8rem', color: 'grey', fontWeight: 'bold' }} className="go-back">
                  Go back to <span style={{ color: 'var(--primary)', cursor: 'pointer' }} onClick={() => setProceed(false)}>first step</span>
                </div>
                
                {
                  userDetails.role === "seeker" ?
                  <button className='login-btn' type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Signup
                  </button> :
                  <button className='login-btn' type="submit" onClick={async (moreDetails) => {
                    let updatedUser = { ...userDetails, ...moreDetails, yearsOfExperience: 0, skills: [], appliedJobs: [] }
                    setUserDetails(updatedUser);
                    await addUser(updatedUser);
                    navigate('/login');
                  }}>
                    Complete Signup
                  </button>
                }
                
              </form>
              ) : null
            }

            <Link
              style={{ marginTop: 20, display: 'block', color: 'var(--primary)', fontSize: '0.8rem' }}
              to="/login"
            >
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Profile Information</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleProfileInformation(async (moreDetails) => {
                if (userDetails.role === "seeker") {
                  userDetails.skills = moreDetails.skills.split(',').map(skill => skill.trim());
                  userDetails.yearsOfExperience = parseInt(moreDetails.yearsOfExperience);
                  userDetails.currentCompany = moreDetails.currentCompany;
                  console.log(userDetails);
                  await addUser(userDetails);
                  navigate('/login');
                }
              })}>
                <div className="sector">
                  <label>Enter years of experience</label>
                  <input {...profileInformation("yearsOfExperience")} type="number" name="yearsOfExperience" id="yearsOfExperience" />
                </div>

                <div className="sector">
                  <label>Enter skills (comma separated)</label>
                  <input {...profileInformation("skills")} type="text" name="skills" id="skills" />
                </div>

                <div className="sector">
                  <label>Enter current company name</label>
                  <input {...profileInformation("currentCompany")} type="text" name="currentCompany" id="currentCompany" />
                </div>

                <button type="submit" style={{ margin: 'auto' }} className='apply' data-bs-dismiss="modal" aria-label="Close">Complete Signup</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage;
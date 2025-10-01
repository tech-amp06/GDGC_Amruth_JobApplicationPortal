import { set, useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import users from '../../assets/users.json';
import { registerUser } from '../../Apis/register';

function SignupPage() {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const { register, handleSubmit } = useForm();
  const [proceed, setProceed] = useState(false);

  useEffect(() => {
    setUsersList(users);
  }, []);

  const addUser = async (newUser) => {
    console.log(newUser);
    const response = await registerUser(newUser);

    if (response) {
      navigate('/login');
    } else {
      console.log("Signup failed!");
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

            <form 
              style={{ textAlign: 'center' }}
              onSubmit={handleSubmit(async (details) => {
                console.log(details);
                await addUser(details);
              })}
            >

            {/* First step */}

            { !proceed ? (
              <div>
                <div className="sector">
                  <label>Enter username</label>
                  <input {...register("username")} type="email" name="username" id="username" />
                </div>

                <div className="sector">
                  <label>Enter password</label>
                  <input {...register("user_password")} type="password" name="user_password" id="password" />
                </div>

                <div className="sector">
                  <div>
                    <input {...register("user_role")} style={{ display: 'inline', width: 'fit-content', marginRight: '10px' }} type="radio" name="user_role" id="seeker" value="seeker" />
                    <label htmlFor="seeker">Seeker</label>
                  </div>

                  <div>
                    <input {...register("user_role")} style={{ display: 'inline', width: 'fit-content', marginRight: '10px' }} type="radio" name="user_role" id="recruiter" value="recruiter" />
                    <label htmlFor="recruiter">Recruiter</label>
                  </div>
                </div>

                <button type="button" className="login-btn" onClick={() => {setProceed(true)}}>Proceed</button>
              </div>
              ) : null
            }

            {/* Second step */}

            { proceed ? 
              (
                <div>
                  <div className="sector">
                    <label>Enter full name</label>
                    <input {...register("uname")} type="text" name="uname" id="name" />
                  </div>

                  <div className="sector">
                    <label>Enter current company</label>
                    <input {...register("current_company")} type="text" name="current_company" id="companyName" />
                  </div>

                  <div style={{ textAlign: 'left', fontSize: '0.8rem', color: 'grey', fontWeight: 'bold' }} className="go-back">
                    Go back to <span style={{ color: 'var(--primary)', cursor: 'pointer' }} onClick={() => setProceed(false)}>first step</span>
                  </div>                  
                  
                  <button className='login-btn' type="submit">
                    Signup
                  </button>
                </div>
              ) : null
            }

            </form>

            <Link
              style={{ marginTop: 20, display: 'block', color: 'var(--primary)', fontSize: '0.8rem' }}
              to="/login"
            >
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Profile Information</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="sector">
                  <label>Enter years of experience</label>
                  <input type="number" name="experience" id="experience" />
                </div>

                <div className="sector">
                  <label>Enter skills (comma separated)</label>
                  <input type="text" name="skills" id="skills" />
                </div>

                <button type="submit" style={{ margin: 'auto' }} className='apply' data-bs-dismiss="modal" aria-label="Close">Complete Signup</button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default SignupPage;
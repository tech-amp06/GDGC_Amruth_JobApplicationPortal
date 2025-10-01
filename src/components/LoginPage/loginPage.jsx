import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './loginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Apis/auth';

function LoginPage({setLoggedInUser}) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [validCredentials, setValidCredentials] = useState(true);

  const authenticate = async (credentials) => {
    let response = await auth(credentials);

    if (response && response.info) {
      localStorage.setItem('user', JSON.stringify(response.info.uname));
      localStorage.setItem('role', JSON.stringify(response.info.user_role));
      localStorage.setItem('id', JSON.stringify(response.info.userid));
      setValidCredentials(true);
      setLoggedInUser(response.info.uname);
      navigate('/');
    } else {
      setValidCredentials(false);
    }
    
  }

  return (
    <div className='login-page'>
      <div style={{ flex: 1, textAlign: 'center', marginTop: 120 }}>
        <img style={{ width: '75%' }} src="https://wallpapers.com/images/hd/job-interview-animated-illustration-res1kxrwcs75bt2q.jpg" alt="loginpage-image" />
      </div>

      <div className="section">
        <div className="login-card">
          <h1>Login</h1>
          
          {
            !validCredentials ? <p style={{ color: 'red', fontSize: '0.8rem' }}>Invalid credentials</p> : <></>
          }

          <form onSubmit={handleSubmit(authenticate)}>
            <div className="sector">
              <label style={{ display: 'block' }}>Enter username</label>
              <input type="email" {...register("username")} name="username" id="username" />
            </div>
            
            <div className="sector">
              <label style={{ display: 'block' }}>Enter password</label>
              <input type="password" {...register("password")} name="password" id="password" />
            </div>

            <button className='login-btn' type="submit">Login</button>
          </form>

          <Link to={'/signup'} style={{ fontSize: '0.8rem', textDecoration: 'underline', marginTop: 20, color: 'var(--primary)' }}>
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
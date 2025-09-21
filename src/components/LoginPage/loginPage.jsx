import { set, useForm } from 'react-hook-form';
import { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import users from '../../assets/users.json';

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [validCredentials, setValidCredentials] = useState(true);

  const authenticate = (credentials) => {
    users.users.find(user => {
      if (user.username === credentials.username && user.password === credentials.password) {
        localStorage.setItem('user', JSON.stringify(user.name));
        localStorage.setItem('role', JSON.stringify(user.role));
        localStorage.setItem('id', JSON.stringify(user.id));
        window.location.href = '/';
        setValidCredentials(true);
      } else {
        setValidCredentials(false);
      }
    })
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
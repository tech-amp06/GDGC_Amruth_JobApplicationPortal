import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        JobHunt
      </div>

      <div className="menu">
        <Link
          to='/' style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="jobs">Jobs</div>
        </Link>
        <div className="companies">Companies</div>
        <div className="salary">Salary</div>
        <div className="resources">Resources</div>
      </div>

      {
        localStorage.getItem('user') ?
        // <div className="user-section">
        //   <span style={{ marginRight: 10 }}>Hello, {JSON.parse(localStorage.getItem('user')).split(" ")[0]}</span>
        // </div> 
        
        <div className="dropdown">
          <a className="btn dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span style={{ marginRight: 10 }}>Hello, {JSON.parse(localStorage.getItem('user')).split(" ")[0]}</span>
            {/* <span style={{ marginRight: 10 }}>Hello</span> */}
          </a>

          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={() => {
              localStorage.removeItem('user');
              localStorage.removeItem('id');
              localStorage.removeItem('role');
              window.location.href = '/login';
            }}>Logout</a></li>
          </ul>
        </div>

        :
        <div className="signup-div">
          <Link
            to={'/login'} style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <button className="sign-up">Sign in</button>
          </Link>
        </div>
      }
    </div>
  );
}

export default Header
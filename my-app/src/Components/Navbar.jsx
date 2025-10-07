import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Navbar({isLoggedIn,setIsLoggedIn,showSignIn,setShowSignIn, username,setUsername}) {
  const navigate = useNavigate();
    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
  <div className="container-fluid"> 
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events
          </a>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="eventsDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>

          </ul>
        </li>
           
      </ul>
      <form className="d-flex">
    {!isLoggedIn?(
      <button className="btn btn-outline-success" type="button" onClick={() => { setShowSignIn?.(true); navigate('/', { replace: true }); }}>SignIn</button>
    ):(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle customclass" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {localStorage.getItem('username')}
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><button className="dropdown-item" onClick={() => {
            setIsLoggedIn?.(false);
            setUsername?.(null);
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            setShowSignIn?.(true);
            navigate('/', { replace: true });
          }}>Logout</button></li>

        </ul>
      </li>
        </ul>
        )}
        
      </form>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
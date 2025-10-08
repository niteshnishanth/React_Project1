import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
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
          <Link className="nav-link" aria-current="page" to="/" onClick={() => { setShowSignIn?.(false); navigate('/'); }}>Home</Link>
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
            <li><a className="dropdown-item" href="#">Movies</a></li>
            <li><a className="dropdown-item" href="#">Religious</a></li>
            <li><a className="dropdown-item" href="#">Sports</a></li>
            <li><a className="dropdown-item" href="#">Music</a></li>
            <li><a className="dropdown-item" href="#">Other</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Classifieds
          </a>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="eventsDropdown">
            <li><a className="dropdown-item" href="#">General</a></li>
            <li><a className="dropdown-item" href="#">Auto</a></li>
            <li><a className="dropdown-item" href="#">Real Estate</a></li>
            <li><a className="dropdown-item" href="#">Roommates</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Deals
          </a>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="eventsDropdown">
            <li><a className="dropdown-item" href="#">Dining</a></li>
            <li><a className="dropdown-item" href="#">Grocery</a></li>
            <li><a className="dropdown-item" href="#">Spa</a></li>
            <li><a className="dropdown-item" href="#">Computer Training</a></li>
            <li><a className="dropdown-item" href="#">Business Promotions</a></li>
            <li><a className="dropdown-item" href="#">General</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gallery
          </a>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="eventsDropdown">
            <li><a className="dropdown-item" href="#">Pictures</a></li>
            <li><a className="dropdown-item" href="#">Videos</a></li>
          </ul>
        </li>
           <li className='nav-item'><a className='nav-link' href="#">Contact Us</a></li>
      </ul>
      <form className="d-flex">
    {!isLoggedIn?(
      <button className="btn btn-outline-success" type="button" onClick={() => { setShowSignIn?.(true); navigate('/', { replace: true }); }}>SignIn</button>
    ):(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle customclass" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {sessionStorage.getItem('username')}
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Post Classified</a></li>
          <li><a className="dropdown-item" href="#">Post Event</a></li>
          <li><a className="dropdown-item" href="#">Post Listing</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><button className="dropdown-item" onClick={() => {
            setIsLoggedIn?.(false);
            setUsername?.(null);
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('username');
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
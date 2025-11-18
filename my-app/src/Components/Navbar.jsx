import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SidePanel from './SidePanel';

function Navbar({isLoggedIn,setIsLoggedIn,showSignIn,setShowSignIn, username,setUsername,setSidePanel,setCategory}) {
const sidePanel=(category, subcategory)=>{
  console.log('sidePanel called with:', category, subcategory)  // Add this
  setSidePanel(category)
  if(subcategory){
    console.log('Setting category to:', [category, subcategory])  // Add this
    setCategory([category, subcategory])
  }
}
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
  <div className="container-fluid"> 
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#" onClick={(e) => { e.preventDefault(); setShowSignIn?.(false); sidePanel('Home')} }>Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="listingsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => { e.preventDefault(); sidePanel('Listings'); }}>
           Listings
          </a>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="listingsDropdown">
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Listings','Services'); }}>Services</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Listings','Real Estate'); }}>Real Estate</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Listings','Business'); }}>Business</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Listings','Health'); }}>Health</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Listings','Travel'); }}>Travel</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Listings','General'); }}>General</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => { e.preventDefault(); sidePanel('Events'); }}>
            Events
          </a>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="eventsDropdown">
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Events','Movies'); }}>Movies</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Events','Religious'); }}>Religious</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Events','Sports'); }}>Sports</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Events','Music'); }}>Music</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Events','Other'); }}>Other</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="classifiedsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => { e.preventDefault(); sidePanel('Classifieds'); }}>
            Classifieds
          </a>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="classifiedsDropdown">
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Classifieds','General'); }}>General</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Classifieds','Auto'); }}>Auto</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Classifieds','Real Estate'); }}>Real Estate</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Classifieds','Roommates'); }}>Roommates</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dealsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => { e.preventDefault(); sidePanel('Deals'); }}>
            Deals
          </a>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="dealsDropdown">
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Deals','Dining'); }}>Dining</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Deals','Grocery'); }}>Grocery</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Deals','Spa'); }}>Spa</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Deals','Computer Training'); }}>Computer Training</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Deals','Business Promotions'); }}>Business Promotions</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); sidePanel('Deals','General'); }}>General</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="galleryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => { e.preventDefault(); }}>
            Gallery
          </a>
          <ul className="dropdown-menu dropdown-menu" aria-labelledby="galleryDropdown">
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); }}>Pictures</a></li>
            <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); }}>Videos</a></li>
          </ul>
        </li>
        <li className='nav-item'><a className='nav-link' href="#" onClick={(e) => { e.preventDefault(); }}>Contact Us</a></li>
      </ul>
      <form className="d-flex">
        {!isLoggedIn?(
          <button className="btn btn-outline-success" type="button" onClick={() => { setShowSignIn?.(true); }}>SignIn</button>
        ):(
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle customclass" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {sessionStorage.getItem('username')}
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
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
import React from 'react'
import {Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsTak</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className='nav-item'><Link className="nav-link text-decoration-none mr-2" to="/Business">Business</Link></li>
              <li className='nav-item'><Link className="nav-link text-decoration-none mr-2" to="/Entertainment">Entertainment</Link></li>
              <li className='nav-item'><Link className="nav-link text-decoration-none mr-2" to="/General">General</Link></li>
              <li className='nav-item'><Link className="nav-link text-decoration-none mr-2" to="/Health">Health</Link></li>
              <li className='nav-item'><Link className="nav-link text-decoration-none mr-2" to="/Science">Science</Link></li>
              <li className='nav-item'><Link className="nav-link text-decoration-none mr-2" to="/Sports">Sports</Link></li>
              <li className='nav-item'><Link className="nav-link text-decoration-none mr-2" to="/Technology">Technology</Link></li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

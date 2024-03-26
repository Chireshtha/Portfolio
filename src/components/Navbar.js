import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../Images/logo.bmp';

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  const hamburgerMenu = () => {
    setDisplay(!display)
  }
  return (
    <div className="navbar">
      <div className='logo'>
        <img src={logo} alt='Loading...' />
        <div className='hamburgar_menu' onClick={hamburgerMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>


      <div className='nav_content'>
        <ul className={display ? "display" : ""}>
          <li><a href='#home' className='text-decoration-none'><span>Home</span></a></li>
          <li><a href='#about' className='text-decoration-none'><span>About</span></a></li>
          <li><a href='#projects' className='text-decoration-none'><span>Projects</span></a></li>
          <li><a href='#resume' className='text-decoration-none'><span>Resume</span></a></li>
          <li><a href='#contact' className='text-decoration-none'><span>Contact</span></a></li>
        </ul>
        
      </div>

    </div>
  )
}

export default Navbar

import React from 'react'
import '../styles/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Screenshot from '../Images/Screenshot5.png';
import Screenshot1 from '../Images/Screenshot.png';
import Screenshot2 from '../Images/Screenshot1.png';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='project_list'>
        <div className='img'>
          <img src={Screenshot} alt='loading...' />
          <div className='content1'>
            <p >A Static Grocery Website build with HTML, CSS, Bootstrap, Javascript</p>
            <button className='btn btn-outline-dark'><Link className='link text-decoration-none' to='https://github.com/Chireshtha/Grocery_Website_Static_Design' target='blank'> Click Me </Link></button>
          </div>
          <h3>Website features a logo, navbar, login, registration, and API integration. This
            website page navigates to another page.
          </h3>
        </div>
        <div className='img' id='projects'>
          <img src={Screenshot1} alt='loading...' />
          <div className='content1'>
            <p >A Dynamic Grocery Website build with React</p>
            <button className='btn btn-outline-dark'><Link className='link text-decoration-none' to='https://github.com/Chireshtha/Grocery_Website_React' target='blank'> Click Me </Link></button>
          </div>
          <h3>The website features a navigation bar, login/registration form, and shopping cart.<br />
            The shopping cart now has access to product details through an API integration. <br />Implemented
            shopping cart functions like adding, removing, managing quantities, and filtering.
          </h3>
        </div>
        <div className='img'>
          <img src={Screenshot2} alt='loading...' />
          <div className='content1'>
            <p >A Star War Planets build with React API</p>
            <button className='btn btn-outline-dark'><Link className='link text-decoration-none' to='https://github.com/Chireshtha/Star-Wars-Planets-React' target='blank'> Click Me </Link></button>
          </div>
          <h3>Utilized React.js to create an interactive Star Wars planet, dynamically fetching data from the SWAPI website. <br />Implemented nested HTTP requests to extract detailed information about each planet, presenting them elegantly in cards.</h3>
        </div>
      </div>
    </div>
  )
}

export default Projects

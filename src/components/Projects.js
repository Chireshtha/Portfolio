import React from 'react'
import '../styles/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Screenshot from '../Images/Project1.jpeg';
import Screenshot1 from '../Images/Project2.jpeg';
import Screenshot2 from '../Images/Project4.jpeg';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='project_list'>
        <div className='img'>
          <img src={Screenshot} alt='loading...' />
          <div className='content1'>
            <p >A Static Grocery Website build with HTML, CSS, Bootstrap, Javascript</p>
            <button className='btn btn-outline-dark'><Link className='link text-decoration-none' to='https://chireshtha.github.io/Grocery_Website_Static_Design/Navbar.html' target='blank'> Click Me </Link></button>
          </div>
          <h3>Website features a logo, navbar, login, registration, and API integration. This
            website page navigates to another page.
          </h3>
        </div>
        <div className='img' id='projects'>
          <img src={Screenshot1} alt='loading...' />
          <div className='content1'>
            <p >A Dynamic Grocery Website build with React</p>
            <button className='btn btn-outline-dark'><Link className='link text-decoration-none' to='https://chireshtha.github.io/Grocery_Website_React/' target='blank'> Click Me </Link></button>
          </div>
          <h3>The website features a navigation bar, login/registration form, and shopping cart.<br />
            The shopping cart now has access to product details through an API integration. <br />Implemented
            shopping cart functions like adding, removing, managing quantities, and filtering.
          </h3>
        </div>
        <div className='img'>
          <img src={Screenshot2} alt='loading...' />
          <div className='content1'>
            <p >Netflix Application</p>
            <button className='btn btn-outline-dark'><Link className='link text-decoration-none' to='https://chireshtha.github.io/Netflix/' target='blank'> Click Me </Link></button>
          </div>
          <h3>Developed a responsive Netflix-like web app using HTML and CSS, featuring a dynamic layout and user-friendly interface. </h3>
        </div>
      </div>
    </div>
  )
}

export default Projects

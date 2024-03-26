import React from 'react';
import '../styles/Contact.css';
import download from '../Images/download.gif';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaInbox } from 'react-icons/fa'
=======
import { FaMapMarkerAlt, FaInbox, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
>>>>>>> 17a5e312e0f44d9de9a75205570c0b8506b85e77

const Contact = () => {
  return (
    <div className='contact' id='contact'>

      <div className='container-contact'>
        <h1>Contact Me</h1>
      </div>

      <div className='container-contact1'>
        <div className='container2'>
          <span>
            <i className='fa fas fa-map-marker'><FaMapMarkerAlt /> </i>
            <h1>Current Location</h1>
            <p>
              Bangalore
            </p>
          </span>
          <span>
            <i className='fa fa-inbox'><FaInbox /> </i>
            <h1>Social Network</h1>
            <p>
              <Link to="https://www.linkedin.com/in/chireshtha-v-4186302a1" className="fa fa-linkedin" target="_blank"><FaLinkedin /></Link>
<<<<<<< HEAD
=======
              <Link to="https://github.com/Chireshtha?tab=repositories" className="fa fa-github" target="_blank"><FaGithub /></Link>
>>>>>>> 17a5e312e0f44d9de9a75205570c0b8506b85e77
            </p>
          </span>
          <span>
            <i className='fa fa-envelope'><FaEnvelope /> </i>
            <h1>EMAIL</h1>
            <p>
              chire14vramirthy@gmail.com
            </p>
          </span>
        </div>
      </div>
      <div className='container-contact2'>
        <div className='container2'>
          <h1>Get In Touch</h1>
          <h2>Dear Hiring Manager <br />
            Welcome To Our Website...
          </h2>
          <p>
            If you're interested in my profile and would like to discuss it in more detail, please contact me.
          </p>

          <div className="contacts">
            <a href="https://github.com/Chireshtha?tab=repositories" className="fa fa-github" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/chireshtha-v-4186302a1" className="fa fa-linkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className='container3'>
          <img src={download} alt='loading...' />
        </div>
      </div>
    </div>
  )
}

export default Contact

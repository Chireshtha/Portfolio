import React from 'react';
import '../styles/Resume.css';
import { Link } from 'react-router-dom';
import resume from '../Images/resume6.webp';

const Resume = () => {
  return (
    <div className='resume_page' id='resume'>
      <div className='resume_img'>
        <img src={resume} alt='loading...'/>
      </div>
      <div className='resume_content'>
        <h2>You can view my resume</h2>
        <button className='btn btn-primary'><Link to='https://drive.google.com/file/d/1tadbp_FOj2yIUjThuZKvb611KMejAX9F/view?usp=drivesdk' target='blank'><span>Download</span></Link></button>
      </div>
    </div>
  )
}

export default Resume

import React from 'react';
import '../styles/About.css';
import aboutMeImage from '../Images/Aboutme.jpeg';
const About = () => {

  return (
    <div className='about_page' id='about'>
      <div className='about_content1'>
        <img src = {aboutMeImage} alt='loading...' />
      </div>
      <div className='about_content2'>
        <h1>About Me</h1>
        <h2>I am Chireshtha. Results-driven Senior Scientific Analyst, Consultant with 5 years 2 months of project
          management experience, seeking a transition from Non-IT to an IT role.<br /><br />
          Proven analytical skills and problem-solving abilities with expertise in <span>HTML, CSS, JavaScript, React, Python, SQL, Git & GitHub.</span><br/><br/>
          I believe in honesty and hordwork, both professionally and personally. Time management is key to my success. I place a high value on punctuality and reliability. As a self-motivated individual, I thrive on challenges and take initiative to drive my own 
          success. <br/><br/> I am passionate about continuous learning and self-improvement, always seeking new opportunities for growth.
        </h2>
      </div>
    </div>
  )
}

export default About

import React, { useEffect, useState } from 'react';
import '../styles/Resume.css';
import { Link } from 'react-router-dom';
import resume from '../Images/resume6.webp';

const Resume = () => {
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const handleScroll = () =>{
    const contentTop1 = document.querySelector('.resume_img').getBoundingClientRect().top;
    const contentTop2 = document.querySelector('.resume_content').getBoundingClientRect().top;

    if(contentTop1 < window.innerHeight/1.5){
      setIsVisible3(true)
    }
    else{
      setIsVisible3(false)
    }

    if(contentTop2 < window.innerHeight/1.5){
      setIsVisible4(true)
    }
    else{
      setIsVisible4(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return()=>window.removeEventListener('scroll', handleScroll);
  },[])
  return (
    <div className='resume_page'  id='resume'>
      <div className={`resume_img ${isVisible3? 'visible': ''}`}>
        <img src={resume} alt='loading...'/>
      </div>
      <div className= {`resume_content ${isVisible4? 'visible': '' }`} >
        <h2>You can view my resume</h2>
        <button className='btn btn-primary'><Link to='https://drive.google.com/file/d/1EwKPdPsa9xLLZiOn6BKxSjZGwAkUXVGW/view?usp=drive_link' target='blank' className='text-decoration-none'><span>Download</span></Link></button>
      </div>
    </div>
  )
}

export default Resume

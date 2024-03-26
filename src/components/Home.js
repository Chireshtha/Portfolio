import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import '../styles/Home.css';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Animation from '../Images/Animation3.gif';


const Home = () => {

  const [desiredJobTittle] = useTypewriter({
    words: ['Full Stack Developer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 150
  })
  return (
    <div className='home_page' id='home'>
      <div className='content1'>
        <h1 className='welcome'>Welcome to Our Website!</h1>
        <h1 className='name'>Hello!  I'm Chireshtha</h1>
        <h1 className='title'>I'm a <span>{desiredJobTittle}</span></h1><br/>
        <div className='social_media'>
        <Link to="https://www.linkedin.com/in/chireshtha-v-4186302a1" className="fa fa-linkedin" target="_blank"><FaLinkedinIn /></Link>
        <Link to="https://github.com/Chireshtha?tab=repositories" className="fa fa-github" target="_blank"><FaGithub /></Link>
        </div>
      </div>
      <div className='content2'>
        <img src={Animation} alt='loading...' />
      </div>
    </div>
  )
}

export default Home

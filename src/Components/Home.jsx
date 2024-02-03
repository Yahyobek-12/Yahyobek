import 'animate.css';
import '../Styles/Home.css';
import { useEffect } from 'react';
import me from '../Images/me.jpg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaYoutube, FaGithub, FaLinkedin, FaTelegram, FaInstagram  } from "react-icons/fa";

const Home = () => {

  useEffect(() => {
    document.title = "Yahyobek || Portfolio"
  }, [])

  return (
    <div className='home'>
      <div className="home-in">
      <div className="home-top">
        <img src={me} alt="me-img" className='animate__animated animate__fadeInUp' />
        <div className="home-top-txt animate__animated animate__fadeInDown">
          <h1>Yahyobek Ergashboyev</h1>
          <h3>Frontend Web Developer</h3>
          <div className="txt-icons">
            <Link to='https://www.youtube.com/channel/UCUBf_gH8egxpNkGTC-s1_AQ' target='_blank'><FaYoutube /></Link>
            <Link to='https://github.com/Yahyobek-12' target='_blank'><FaGithub /></Link>
            <Link to='https://www.linkedin.com/in/yahyobek-ergashboyev-9899832a8/' target='_blank'><FaLinkedin /></Link>
            <Link to='https://www.instagram.com/_yahyobek_12_/' target='_blank'><FaInstagram /></Link>
            <Link to='https://t.me/Ncy12Ncy' target='_blank'><FaTelegram /></Link>
          </div>
        </div>
      </div>
      <div className="home-bottom  animate__animated animate__fadeInUp">
        <h3>I write about non-technical stuff in the technical world.</h3>
        <div className="flex-btns">
          <Link to='about'><Button variant='contained'>About Me</Button></Link>
          <Link to='projects'><Button variant='outlined'>Projects</Button></Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home

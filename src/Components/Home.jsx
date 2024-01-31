import 'animate.css';
import '../Styles/Home.css';
import me from '../Images/Tg_Bg.png';
import { Link } from 'react-router-dom';
import { FaYoutube, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Home = () => {
  return (
    <div className='home'>
      <div className="home-in">
      <div className="home-top">
        <img src={me} alt="me-img" className='animate__animated animate__fadeInUp' />
        <div className="home-top-txt animate__animated animate__fadeInDown">
          <h1>Yahyobek Ergashboyev</h1>
          <h3>Frontend Web Developer</h3>
          <div className="txt-icons">
            <Link to=''><FaYoutube /></Link>
            <Link to=''><FaGithub /></Link>
            <Link to=''><FaLinkedin /></Link>
            <Link to=''><FaTelegram /></Link>
          </div>
        </div>
      </div>
      <div className="home-bottom  animate__animated animate__fadeInUp">
        <h3>I write about non-technical stuff in the technical world.</h3>
        <div className="flex-btns">
          <Link to=''>Read Blog</Link>
          <Link to='about'>About Me</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home

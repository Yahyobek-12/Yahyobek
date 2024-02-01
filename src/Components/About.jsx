import 'animate.css';
import '../Styles/About.css';
import { useEffect } from 'react';
import bg1 from '../Images/Tg_Bg.png';

const About = () => {

  useEffect(() => {
    document.title = "About Me";
  }, [])

  return (
    <div className='about'>
      <h1>About Me</h1>
      <div className="about-in">
        <div className="about-cards">
          <div className="about-card animate__animated animate__fadeInUp">
            <h3>I am Azimjon Pulatov, a 22-year-old Software Engineer from Tashkent, Uzbekistan, currently living in Warsaw, Poland.</h3>
            <h4>I am always contributing to developer events by giving a talk or as a mentor, especially the ones that engage women in tech. As a developer, I really want to see more diversity in the industry.</h4>
            <h4>I am always contributing to developer events by giving a talk or as a mentor, especially the ones that engage women in tech. As a developer, I really want to see more diversity in the industry.</h4>
            <img className='bg-1' src={bg1} alt="" />
            <p>DjangoGirls, Tashkent</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

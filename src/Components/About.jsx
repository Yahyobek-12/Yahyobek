import 'animate.css';
import '../Styles/About.css';
import { useEffect } from 'react';
import bg1 from '../Images/team.jfif';
import { Link } from 'react-router-dom';

const About = () => {

  useEffect(() => {
    document.title = "Yahyobek || About";
  }, [])

  return (
    <div className='about'>
      <h1 className='animate__animated animate__fadeInDown'>About Me</h1>
      <div className="about-in">
        <div className="about-cards">
          <div className="about-card animate__animated animate__fadeInUp">
            <h3>Hello, I'm Yahyobek Ergashboyev, I'm 16 years old and I'm currently a 9th grade student at 51 General Secondary School.</h3>
            <h3>I graduated from 2023 IT Center and am still working on myself and I currently live in Andijan Province</h3>
            <h3>Click cv to learn more about me</h3>
            <img className='bg-1' src={bg1} alt="" />
            <Link
            to='https://www.canva.com/design/DAF9HTTBRHg/96WkP0QDecEsq2o9wI85qA/view?utm_content=DAF9HTTBRHg&utm_campaign=designshare&utm_medium=link&utm_source=editor'
            target='_blank'>Read CV</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

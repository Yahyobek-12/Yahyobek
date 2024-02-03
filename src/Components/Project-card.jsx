import { Link } from 'react-router-dom';
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useEffect } from 'react';

const ProjectCard = () => {

    useEffect(() => {
        document.title = 'Yahyobek || Projects';
    }, [])

  return (
    <div className="project-cards-in">

      <div className="project-card animate__animated animate__fadeInLeft">
        <h3>Notepad</h3>
        <p><span>Technologies:</span> Html || Css || Javascript || Sweet.Alert</p>
        <div className="flex-links">
            <Link to='https://notepad-beta-one.vercel.app/' target='_blank'><CiShare1 className='flex-icon' /></Link>
            <Link to='https://github.com/Yahyobek-12/notepad' target='_blank'><FaGithub className='flex-icon' /></Link>
        </div>
      </div>

      <div className="project-card animate__animated animate__fadeInLeft">
        <h3>ColorSpy</h3>
        <p><span>Technologies:</span> Html || Css || Javascript</p>
        <div className="flex-links">
            <Link to='https://new-color-lilac.vercel.app/' target='_blank'><CiShare1 className='flex-icon' /></Link>
            <Link to='https://github.com/Yahyobek-12/colormania-app' target='_blank'><FaGithub className='flex-icon' /></Link>
        </div>
      </div>

      <div className="project-card animate__animated animate__fadeInLeft">
        <h3>WorlPin</h3>
        <p><span>Technologies:</span> React.Js || React.CountUp || React.Icons</p>
        <div className="flex-links">
            <Link to='https://worldpin-countries.vercel.app/' target='_blank'><CiShare1 className='flex-icon' /></Link>
            <Link to='https://github.com/Yahyobek-12/WorldPin' target='_blank'><FaGithub className='flex-icon' /></Link>
        </div>
      </div>

      <div className="project-card animate__animated animate__fadeInLeft">
        <h3>GitSearcher</h3>
        <p><span>Technologies:</span> React.Js || React.Icons || React.Router.Dom || UuID || Axios || Animate.Css</p>

        <div className="flex-links">  
            <Link to='https://git-users-two.vercel.app/' target='_blank'><CiShare1 className='flex-icon' /></Link>
            <Link to='https://github.com/Yahyobek-12/github-finder' target='_blank'><FaGithub className='flex-icon' /></Link>
        </div>
      </div>

      <div className="project-card animate__animated animate__fadeInLeft">
        <h3>New-Tube</h3>
        <p><span>Technologies:</span> React.Js || Material.Ui || React.Player || React.Router.Dom || Axios</p>

        <div className="flex-links">
            <Link to='https://new-tube-six.vercel.app/' target='_blank'><CiShare1 className='flex-icon' /></Link>
            <Link to='https://github.com/Yahyobek-12/youtube_clone' target='_blank'><FaGithub className='flex-icon' /></Link>
        </div>
      </div>

    </div>
  )
}

export default ProjectCard

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Taskmate from '../Images/taskmate.jpg';
import Notepad from '../Images/notepad.jpg';
import Colorspy from '../Images/colorspy.jpg';
import Worldpin from '../Images/worldpin.jpg';
import NewTube from '../Images/newtube.jpg';
import Gitsearcher from '../Images/github.jpg';


const ProjectCard = () => {

    useEffect(() => {
        document.title = 'Yahyobek || Projects';
    }, [])

  return (
    <div className="project-cards animate__animated animate__fadeIn">
      <div className="pr-card">
        <img src={Taskmate} alt="" />
        <h2>TaskMate</h2>
        <h3><span>Technologies</span>: React-Js || Mui || Animate-Css || React-Router || React-Toastify || React-Icons || Clipboard-Copy</h3>
        <Link to='https://task-mate-ncy.vercel.app/' target='_blank'><CiShare1 className='a-icon' /></Link>
        <Link to='https://github.com/Yahyobek-12/TaskMate' target='_blank'><FaGithub className='a-icon-2' /></Link>
      </div>

      <div className="pr-card">
        <img src={Notepad} alt="" />
        <h2>Notepad</h2>
        <h3><span>Technologies</span>: Html || Css || Javascript || Sweet-Alert</h3>
        <Link to='https://notepad-beta-one.vercel.app/' target='_blank'><CiShare1 className='a-icon' /></Link>
        <Link to='https://github.com/Yahyobek-12/notepad' target='_blank'><FaGithub className='a-icon-2' /></Link>
      </div>

      <div className="pr-card">
        <img src={Colorspy} alt="" />
        <h2>ColorSpy</h2>
        <h3><span>Technologies</span>: Html || Css || Javascript</h3>
        <Link to='https://new-color-lilac.vercel.app/' target='_blank'><CiShare1 className='a-icon' /></Link>
        <Link to='//github.com/Yahyobek-12/' target='_blank'><FaGithub className='a-icon-2' /></Link>
      </div>

      <div className="pr-card">
        <img src={Worldpin} alt="" />
        <h2>WorldPin</h2>
        <h3><span>Technologies</span>: React-Js || React-Icons || React-Router || React-Count-Up</h3>
        <Link to='https://worldpin-countries.vercel.app/' target='_blank'><CiShare1 className='a-icon' /></Link>
        <Link to='https://github.com/Yahyobek-12/WorldPin' target='_blank'><FaGithub className='a-icon-2' /></Link>
      </div>

      <div className="pr-card">
        <img src={Gitsearcher} alt="" />
        <h2>GitSearcher</h2>
        <h3><span>Technologies</span>: React-Js || Animate-Css || React-Router || React-Icons</h3>
        <Link to='https://git-users-two.vercel.app/' target='_blank'><CiShare1 className='a-icon' /></Link>
        <Link to='https://github.com/Yahyobek-12/github-finder' target='_blank'><FaGithub className='a-icon-2' /></Link>
      </div>

      <div className="pr-card">
        <img src={NewTube} alt="" />
        <h2>New-Tube</h2>
        <h3><span>Technologies</span>: React-Js || Mui || Animate-Css || React-Router || React-Toastify || React-Icons || Clipboard-Copy || Swiper || React Player</h3>
        <Link to='https://new-tube-nwt.vercel.app/' target='_blank'><CiShare1 className='a-icon' /></Link>
        <Link to='https://github.com/Yahyobek-12/NewTube' target='_blank'><FaGithub className='a-icon-2' /></Link>
      </div>
    </div>
  )
}

export default ProjectCard

import '../Styles/Projects.css';
import ProjectCard from './Project-card';

const Projects = () => {
  return (
    <div className='projects'>
      <h2 className='logo-pr animate__animated animate__fadeInDown'>My Recently Projects</h2>
        <ProjectCard />
    </div>
  )
}

export default Projects

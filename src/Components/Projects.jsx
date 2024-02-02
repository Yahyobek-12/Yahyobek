import '../Styles/Projects.css';
import ProjectCard from './Project-card';

const Projects = () => {
  return (
    <div className='projects'>
      <h2 className='animate__animated animate__fadeInDown'>My Recently Projects</h2>
      <div className="project-cards">
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects

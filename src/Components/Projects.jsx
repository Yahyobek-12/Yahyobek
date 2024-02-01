import '../Styles/Projects.css';
import ProjectCard from './Project-card';

const Projects = () => {
  return (
    <div className='projects'>
      <h2>My Recently Projects</h2>
      <div className="project-cards">
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects

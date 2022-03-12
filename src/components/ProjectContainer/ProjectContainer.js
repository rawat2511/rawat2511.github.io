import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'


const ProjectContainer = ({ project }) => (
  <div className='project'>
    <div className="project_left">
    <h3>{project.name}</h3>

    <div className="flex-out">
    <div className="img-flex">
      <img className="project_image" src={project.image1} alt="Book My Show" />
      <img className="project_image" src={project.image2} alt="Book My Show" />
    </div>
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    <div>
    {project.sourceCode && (
      <a
        rel="noreferrer noopener" 
        target="_blank"
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        rel="noreferrer noopener" 
        target="_blank"
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
    </div>
    </div>
    </div>
  </div>
)

export default ProjectContainer

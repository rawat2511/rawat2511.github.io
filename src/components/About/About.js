import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import Shubham from './Shubham.pdf'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <img className="photo" src="https://avatars.githubusercontent.com/u/88944511?v=4" alt="shubham" />
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={Shubham} download="Shubham_Resume.pdf">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <div className="social-about">
            {social.github && (
              <a
                rel="noreferrer noopener" 
                target="_blank"
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                rel="noreferrer noopener" 
                target="_blank"
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default About

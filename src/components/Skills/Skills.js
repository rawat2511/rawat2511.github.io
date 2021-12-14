import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <img className="image_skill" src={skill.src} alt={skill.name} />
            <div className="head skill_name">{skill.name}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

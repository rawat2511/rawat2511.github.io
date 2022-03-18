import { skills } from '../../portfolio'
import './Skills.css'
import html from '../../logo/html.svg';
import css from '../../logo/css.svg';
import javascript from '../../logo/javascript.svg';
import node from '../../logo/node.svg';
import express from '../../logo/express.svg';
import mongodb from '../../logo/mongodb.svg';
import react from '../../logo/react.svg';
import redux from '../../logo/redux.svg';

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
          <li className='skills__list-item btn btn--plain'>
            <img className="image_skill" src={html} alt="html" />
            <div className="head skill_name">HTML</div>
          </li>
          <li className='skills__list-item btn btn--plain'>
            <img className="image_skill" src={css} alt="css" />
            <div className="head skill_name">CSS</div>
          </li>
          <li className='skills__list-item btn btn--plain'>
            <img className="image_skill" src={javascript} alt="javascript" />
            <div className="head skill_name">JavaScript</div>
          </li>
          <li className='skills__list-item btn btn--plain'>
            <img className="image_skill" src={react} alt="react" />
            <div className="head skill_name">React</div>
          </li>
          <li className='skills__list-item btn btn--plain'>
            <img className="image_skill" src={redux} alt="redux" />
            <div className="head skill_name">Redux</div>
          </li>
          <li className='skills__list-item btn btn--plain'>
            <img className="image_skill" src={node} alt="node" />
            <div className="head skill_name">Node</div>
          </li>
          <li className='skills__list-item btn btn--plain'>
            <img className="image_skill" src={express} alt="express" />
            <div className="head skill_name">Express</div>
          </li>
          <li className='skills__list-item btn btn--plain'>
            <img className="image_skill" src={mongodb} alt="mongodb" />
            <div className="head skill_name">MongoDB</div>
          </li>
        {/* {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <img className="image_skill" src={skill.src} alt={skill.name} />
            <div className="head skill_name">{skill.name}</div>
          </li>
        ))} */}
      </ul>
    </section>
  )
}



export default Skills;

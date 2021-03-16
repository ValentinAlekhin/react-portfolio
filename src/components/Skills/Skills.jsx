import React from 'react'

import classes from './Skills.module.scss'

const Skills = ({ list }) => {
  return (
    <ul className={classes.skillsList}>
      {list.map((skill, i) => (
        <li key={i} className={classes.skillsItem}>
          {skill}
        </li>
      ))}
    </ul>
  )
}

export default Skills

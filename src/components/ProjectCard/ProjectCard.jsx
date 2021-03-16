import React from 'react'
import { Link } from 'react-router-dom'

import classes from './ProjectCard.module.scss'

const ProjectCard = ({ status, title, description, skills, id }) => {
  return (
    <Link to={`/project/${id}`} className={classes.ProjectCard}>
      <span className={classes.status}>{status}</span>
      <h4 className={classes.title}>{title}</h4>
      <p className={classes.description}>{description}</p>
      <ul className={classes.skillsList}>
        {skills.map((skill, i) => (
          <li key={i} className={classes.skillsItem}>
            {skill}
          </li>
        ))}
      </ul>
    </Link>
  )
}

export default ProjectCard

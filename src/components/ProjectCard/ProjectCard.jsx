import React from 'react'
import { Link } from 'react-router-dom'

import classes from './ProjectCard.module.scss'

import Badges from '../Badges/Badges'

const ProjectCard = ({ status, title, description, skills, id }) => {
  return (
    <Link to={`/project/${id}`} className={classes.ProjectCard}>
      <span className={classes.status}>{status}</span>
      <h4 className={classes.title}>{title}</h4>
      <p className={classes.description}>{description}</p>
      <Badges list={skills} />
    </Link>
  )
}

export default ProjectCard

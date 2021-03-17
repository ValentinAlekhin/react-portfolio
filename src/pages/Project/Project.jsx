import React, { useContext } from 'react'

import classes from './Project.module.scss'

import { ProjectsContext } from '../../context/ProjectsContext'

import Skills from '../../components/Skills/Skills'
import Markdown from '../../components/Markdown/Markdown'

const Project = ({ match }) => {
  const id = parseInt(match.params.id)
  const { title, description, skills, markdown } = useContext(
    ProjectsContext
  ).find(el => el.id === id)

  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className={classes.Project}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.description}>{description}</p>
          {markdown ? <Markdown url={markdown} /> : null}
          <Skills list={skills} />
        </div>
      </div>
    </div>
  )
}

export default Project

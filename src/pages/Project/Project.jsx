import React, { useContext } from 'react'

import classes from './Project.module.scss'

import { ProjectsContext } from '../../context/ProjectsContext'

import Badge from '../../ui/Badge/Badge'
import Markdown from '../../components/Markdown/Markdown'

const Project = ({ match }) => {
  const id = parseInt(match.params.id)
  const { title, description, skills, markdown, links } = useContext(
    ProjectsContext
  ).find(el => el.id === id)

  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <div className={classes.Project}>
          <div className={classes.titleAndLinks}>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.links}>
              {links.map(({ href, title }, i) => (
                <Badge key={i} text={title} link={href} />
              ))}
            </div>
          </div>

          <p className={classes.description}>{description}</p>

          {markdown ? <Markdown url={markdown} /> : null}

          <div className={classes.skills}>
            {skills.map((el, i) => (
              <Badge key={i} text={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project

import React from 'react'

import classes from './Badge.module.scss'

const Badge = ({ text, link }) => {
  const TextElement = <span className={classes.text}>{text}</span>
  const LinkElement = (
    <a href={link} className={classes.link}>
      {text}
    </a>
  )

  return <div className={classes.Badge}>{link ? LinkElement : TextElement}</div>
}

export default Badge

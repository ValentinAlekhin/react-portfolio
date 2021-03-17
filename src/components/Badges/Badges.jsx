import React from 'react'

import classes from './Badges.module.scss'

const Badges = ({ list }) => {
  return (
    <ul className={classes.badgesList}>
      {list.map((skill, i) => (
        <li key={i} className={classes.badgesItem}>
          {skill}
        </li>
      ))}
    </ul>
  )
}

export default Badges

import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './SideNav.module.scss'

const SideNav = () => {
  const links = [
    { to: '/', title: 'Home' },
    { to: '/projects', title: 'Projects' },
  ]

  return (
    <div className={classes.SideNav}>
      <nav className={classes.navContainer}>
        <ul className={classes.navList}>
          {links.map(({ to, title }, i) => (
            <li key={i} className={classes.navItem}>
              <NavLink
                exact
                className={classes.navLink}
                activeClassName={classes.active}
                to={to}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SideNav

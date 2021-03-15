import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Header.module.scss'

const Header = () => {
  const links = [
    { to: '/', title: 'Home' },
    { to: '/projects', title: 'Projects' },
  ]

  return (
    <div className={'mainContainer'}>
      <header className={classes.headerContainer}>
        <div className={classes.nameContainer}>
          {/* TODO: Добавить лого */}
          <h1 className={classes.nameTitle}>
            <NavLink to={'/'}>Valentin Alekhin</NavLink>
          </h1>
        </div>
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
      </header>
    </div>
  )
}

export default Header

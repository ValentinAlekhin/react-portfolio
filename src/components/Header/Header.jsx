import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Icon } from './abstract.svg'

import classes from './Header.module.scss'

const Header = ({ toggleSidenav }) => {
  const links = [
    { to: '/', title: 'Home' },
    { to: '/projects', title: 'Projects' },
  ]

  return (
    <div className={'mainContainer'}>
      <header className={classes.headerContainer}>
        <div className={classes.nameContainer}>
          <Icon style={{ fill: '#fff', height: '1.5em', width: '1.5em' }} />
          <h1 className={classes.nameTitle}>
            <NavLink to={'/'}>Valentin Alekhin</NavLink>
          </h1>
        </div>
        <button onClick={toggleSidenav} className={classes.sideNav}>
          Close
        </button>
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

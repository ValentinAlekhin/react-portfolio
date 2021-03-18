import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Header.module.scss'

import { ReactComponent as Icon } from './abstract.svg'

import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu'

const Header = ({ toggleSidenav, isOpen }) => {
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
        <BurgerMenu
          onClick={toggleSidenav}
          className={classes.sideNav}
          value={isOpen}
        >
          Close
        </BurgerMenu>
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

import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Header.module.scss'

const Header = () => {
  return (
    <div className={'mainContainer'}>
      <header className={classes.headerContainer}>
        <div className={classes.nameContainer}>
          {/* TODO: Добавить лого */}
          <h1 className={classes.nameTitle}>
            <Link to={'/'}>Valentin Alekhin</Link>
          </h1>
        </div>
        <nav className={classes.navContainer}>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <Link to={'/'}>Home</Link>
            </li>
            <li className={classes.navItem}>
              <Link to={'/projects'}>Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header

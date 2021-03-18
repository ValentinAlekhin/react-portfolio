import React from 'react'

import './BurgerMenu.scss'

const BurgerMenu = ({ value, onClick, className }) => {
  return (
    <div onClick={onClick} className={className}>
      <input type="checkbox" id="menu_checkbox" value={value} />
      <label htmlFor="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </div>
  )
}

export default BurgerMenu

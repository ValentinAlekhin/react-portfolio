import React from 'react'

import classes from './Home.module.scss'

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.imageContainer}>
        {/* <img
          className={classes.image}
          // TODO: Добавить нужную фотку
          src="https://c.pxhere.com/photos/d0/f2/black_wallpaper_black_and_white_casual_dark_fashion_jacket_man_model-924824.jpg!d"
          alt="man"
        /> */}
      </div>
      <div className={classes.textContainer}>
        <p className={classes.mainText}>Frontend</p>
        <p className={classes.otherText}>developer</p>
      </div>
    </div>
  )
}

export default Home

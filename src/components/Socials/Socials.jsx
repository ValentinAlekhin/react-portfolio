import React from 'react'

import { ReactComponent as TelegramIcon } from './images/Telegram.svg'
import { ReactComponent as GitHubIcon } from './images/GitHub.svg'
import { ReactComponent as MailIcon } from './images/Mail.svg'

import classes from './Socials.module.scss'

const Socials = () => {
  return (
    <div className={classes.socialsContainer}>
      <ul className={classes.socialsList}>
        <li className={classes.socialItem}>
          <a
            href="https://t.me/alekhin_vv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon
              className={classes.socialIco}
              style={{ width: '25px', height: '25px' }}
            />
          </a>
        </li>
        <li className={classes.socialItem}>
          <a
            href="https://github.com/ValentinAlekhin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              className={classes.socialIco}
              style={{ width: '25px', height: '25px' }}
            />
          </a>
        </li>
        <li className={classes.socialItem}>
          <a
            href="mailto:headbangernetwork@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon
              className={classes.socialIco}
              style={{ width: '25px', height: '25px' }}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials

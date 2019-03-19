import React, { useState } from 'react'
import styles from './styles/navbar.module.scss'
import classnames from 'classnames'

export default function Navbar () {
  const [navmenuVisible, setNavmenuVisible] = useState(false)
  const classes = classnames({
    [styles['navbar__items']]: true,
    [styles.visible]: navmenuVisible
  })

  return (
    <div className={styles.navbar}>
      <ul className={classes}>
        <li className={styles['navbar__item']}>etusivu</li>
        <li className={styles['navbar__item']}>yleisinfo</li>
      </ul>

      <div
        onClick={() => setNavmenuVisible(!navmenuVisible)}
        className={styles.burger}
      />
    </div>
  )
}
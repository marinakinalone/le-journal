/* eslint-disable @next/next/no-img-element */

import React from 'react'
import styles from './styles/Fenetres.module.scss'

const Frame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.frame__container}>
      <img
        className={styles.frame__image}
        src="/resources/fenetres/window-frame.png"
        alt="window frame"
      />
      {children}
    </div>
  )
}

export default Frame

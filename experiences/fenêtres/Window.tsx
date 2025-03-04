import React from 'react'
import styles from './styles/Fenetres.module.scss'
import { IWindow } from '.'

interface IWindowFrame extends IWindow {
  handleOpenWindow: () => void
}

// TODO typing animation for the text ?
const Window = ({ url, year, month, city, country, handleOpenWindow }: IWindowFrame) => {
  return (
    <section className={styles.window__container}>
      <div className={styles.frame__container}>
        <img
          className={styles.frame__image}
          src="/resources/fenetres/window-frame.png"
          alt="window frame"
        />
        <video className={styles.frame__video} src={url} controls autoPlay loop />
      </div>
      <p>{`${city} in ${country}, ${month} ${year}`}</p>
      <button onClick={() => handleOpenWindow()}>open a new window</button>
    </section>
  )
}

export default Window

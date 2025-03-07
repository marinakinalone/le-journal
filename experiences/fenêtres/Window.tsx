import React from 'react'
import Frame from './Frame'
import styles from './styles/Fenetres.module.scss'
import { IWindow } from '.'

interface IWindowFrame extends IWindow {
  handleOpenWindow: () => void
  handleVideoLoaded: () => void
}

// TODO typing animation for the text ?
const Window = ({
  url,
  year,
  month,
  city,
  country,
  handleOpenWindow,
  handleVideoLoaded,
}: IWindowFrame) => {
  return (
    <section className={styles.window__container}>
      <Frame>
        <video
          className={styles.frame__video}
          src={url}
          controls
          autoPlay
          loop
          onLoadedData={handleVideoLoaded}
        />
      </Frame>
      <p className={styles.window__caption}>{`${city} in ${country}, ${month} ${year}`}</p>
      <button className={styles.window__button} onClick={() => handleOpenWindow()}>
        open a new window
      </button>
    </section>
  )
}

export default Window

import React from 'react'
import useTypingEffect from '../../main/hooks/useTypingEffect'
import Frame from './Frame'
import styles from './styles/Fenetres.module.scss'
import { IWindow } from '.'

interface IWindowFrame extends IWindow {
  handleOpenWindow: () => void
  handleVideoLoaded: () => void
  loading: boolean
}

const Window = ({
  url,
  year,
  month,
  city,
  country,
  handleOpenWindow,
  handleVideoLoaded,
  loading,
}: IWindowFrame) => {
  const text = `${city} in ${country}, ${month} ${year}`
  const caption = useTypingEffect(text, 75, true)

  return (
    <section className={styles.window__container}>
      <Frame>
        <video
          className={styles.frame__video}
          src={url}
          autoPlay
          loop
          onLoadedData={handleVideoLoaded}
          controlsList="nofullscreen"
        />
      </Frame>
      {!loading && (
        <>
          <p className={styles.window__caption}>{caption}</p>
          <button
            className={styles.window__button}
            onClick={() => {
              handleOpenWindow()
            }}
          >
            open a new window
          </button>
        </>
      )}
    </section>
  )
}

export default Window

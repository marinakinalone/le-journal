import React from 'react'
import Frame from './Frame'
import styles from './styles/Fenetres.module.scss'

const Intro = ({
  handleStart,
}: {
  handleStart: (value: React.SetStateAction<boolean>) => void
}) => {
  return (
    <Frame>
      <button className={styles.intro__button} onClick={() => handleStart(true)}>
        Open a window
      </button>
    </Frame>
  )
}

export default Intro

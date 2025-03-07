import React from 'react'
import Frame from './Frame'
import styles from './styles/Fenetres.module.scss'

// TODO typing animation for the text ?
const Loading = () => {
  return (
    <div className={styles.loading__container}>
      <Frame>
        <p>Finding a window...</p>
      </Frame>
    </div>
  )
}

export default Loading

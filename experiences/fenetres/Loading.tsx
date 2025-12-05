import React from 'react'
import useTypingEffect from '../../main/hooks/useTypingEffect'
import Frame from './Frame'
import styles from './styles/Fenetres.module.scss'

const Loading = () => {
  const caption = useTypingEffect('Finding a window...', 75, true)
  
  return (
    <div className={styles.loading__container}>
      <Frame>
        <p>{caption}</p>
      </Frame>
    </div>
  )
}

export default Loading

import React from 'react'
import { games } from '../../../../main/data'
import styles from '../../styles/Modal.module.scss'
import MusicCredit from './MusicCredit'

const MusicModal = () => {
  return (
    <section className={styles.modal}>
      <div className={styles.wrapper}>
        <h2>musique</h2>
        <ul>
          {games.map(({ title, music }) => {
            const { artist, song } = music
            return <MusicCredit key={title} game={title} artist={artist} song={song} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default MusicModal

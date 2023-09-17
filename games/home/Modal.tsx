import React from "react"
import styles from "./styles/Modal.module.scss"
import { games } from "./data/games"
import { MusicCredit } from "."

const Modal = () => {
  //TODO: map data.
  return (
    <section className={styles.modal}>
      <div className={styles.wrapper}>
        <h2>musique</h2>
        <ul>
          {games.map((game) => {
            return (
              <MusicCredit
                key={game.title}
                game={game.title}
                artist={game.artist}
                song={game.song}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Modal

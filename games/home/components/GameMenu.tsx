import React from 'react'
import { useEffect, useState } from 'react'
import AudioPlayer from '../../../main/components/AudioPlayer'
import { games } from '../../../main/data'
import LinkToGame from '../components/LinkToGame'
import MusicModal from '../components/MusicModal'
import styles from '../styles/GameMenu.module.scss'
import MainTitle from './MainTitle'

const GameMenu = () => {
  const [displayMusicModal, setDisplayMusicModal] = useState(false)
  const openMusicModal = () => setDisplayMusicModal(true)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDisplayMusicModal(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [displayMusicModal])
  return (
    <div className={styles.container__background_default}>
      <section className={styles.container}>
        <AudioPlayer source={'/resources/home/boardwalk.wav'} />
        <MainTitle />

        <ul className={styles.entries}>
          {games.map((game, index) => {
            if (!game.hidden) {
              return <LinkToGame key={game.id} index={index} {...game} />
            }
          })}
        </ul>

        {displayMusicModal && <MusicModal />}

        <footer className={styles.footer}>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p>
            un projet imaginé par{' '}
            <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">
              mks
            </a>{' '}
            © {`${new Date().getFullYear()}`} //{' '}
            <button className={styles.footer__btn} onClick={() => openMusicModal()}>
              musique
            </button>{' '}
            //{' '}
            <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </footer>
      </section>
    </div>
  )
}

export default GameMenu

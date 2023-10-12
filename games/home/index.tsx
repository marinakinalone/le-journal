/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import AudioPlayer from '../../main/components/AudioPlayer'
import { games } from '../../main/data'
import LinkToGame from './components/LinkToGame'
import Modal from './components/Modal'
import styles from './styles/Home.module.scss'

/*
TODO: 
- add loader and get the data from the provider
- animate the list: typing animation for the title + feather, slide right for the game links
*/

const Home: NextPage = () => {
  const [displayModal, setDisplayModal] = useState(false)

  const openModal = () => setDisplayModal(true)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDisplayModal(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [displayModal])
  return (
    <div className={styles.container__background_default}>
      <section className={styles.container}>
        <AudioPlayer source={'/resources/home/boardwalk.wav'} />
        <h1>
          le journal
          <Image src="/resources/home/feather.png" alt="" width={70} height={70} />
        </h1>

        <ul className={styles.entries}>
          {games.map((game) => {
            if (!game.hidden) {
              return <LinkToGame key={game.id} {...game} />
            }
          })}
        </ul>

        {displayModal && <Modal />}

        <footer className={styles.footer}>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p>
            un projet imaginé par{' '}
            <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">
              mks
            </a>{' '}
            © {`${new Date().getFullYear()}`} //{' '}
            <button className={styles.footer__btn} onClick={() => openModal()}>
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

export default Home

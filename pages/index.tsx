/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../games/home/styles/Home.module.scss"
import { LinkToGame, Modal } from "../games/home"
import AudioPlayer from "../main/components/AudioPlayer"
import { useEffect, useState } from "react"
import { games } from "../games/home/data/games"


const Home: NextPage = () => {
  const [displayModal, setDisplayModal] = useState(false)
  const openModal = () => setDisplayModal(true)


  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        setDisplayModal(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [displayModal])
  return (
    <div className={styles.container}>
      <Head>
        <title>le journal</title>
        <meta name="description" content="un journal intime interactif" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AudioPlayer source={"./resources/home/boardwalk.wav"} />
        <h1>le journal</h1>
        <ul className={styles.entries}>
          {games.map((game) => {
            return <LinkToGame key={game.title} title={game.title} />
          })}
        </ul>
        {displayModal ? <Modal /> : <></>}

        <footer className={styles.footer}>
          <p>un projet imaginé par <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">mks</a> © 2022 // <button className={styles.footer__btn} onClick={() => openModal()}>musique</button> // <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </footer>
      </main>
    </div>
  )
}

export default Home

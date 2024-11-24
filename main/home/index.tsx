import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { experiences } from './data/experiences'
import LinkToExperience from './components/LinkToExperience'
import styles from './styles/Home.module.scss'

const Home: NextPage = () => {
  const [displayModal, setDisplayModal] = useState(false)
  const openModal = () => setDisplayModal(true)

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
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
    <div className={styles.container}>
      <Head>
        <title>le journal</title>
        <meta name="description" content="un journal intime interactif" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>le journal</h1>
        <ul className={styles.entries}>
          {experiences.map((experience) => {
            return <LinkToExperience key={experience.title} title={experience.title} />
          })}
        </ul>

        <footer className={styles.footer}>
          <p>
            un projet imaginé par{' '}
            <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">
              mks
            </a>{' '}
            © 2024 |{' '}
            <a
              href="https://github.com/marinakinalone?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </main>
    </div>
  )
}

export default Home

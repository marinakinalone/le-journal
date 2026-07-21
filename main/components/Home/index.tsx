import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { experiences } from '../../data'
import useExperienceData from '../../hooks/useExperienceData'
import styles from '../../styles/Main.module.scss'
import LinkToExperience from '../LinkToExperience'
import Title from '../Title'

const homeExperience = experiences.find((experience) => experience.id === 'le-journal')

const Home: NextPage = () => {
  const { updateCurrentExperienceData } = useExperienceData()

  useEffect(() => {
    if (homeExperience) {
      updateCurrentExperienceData({ ...homeExperience })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const visibleExperiences = [...experiences].filter((experience) => !experience.hidden).reverse()

  return (
    <div className={styles.container}>
      <Head>
        <title>le journal</title>
        <meta name="description" content="un journal intime interactif" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title />
        <ul className={styles.entries}>
          {visibleExperiences.map((experience, index) => (
            <LinkToExperience key={experience.id} index={index} {...experience} />
          ))}
        </ul>
        <footer className={styles.footer}>
          <p>
            un projet imaginé par{' '}
            <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">
              mks
            </a>{' '}
            © 2026 |{' '}
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

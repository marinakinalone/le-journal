import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../../experiences/une-minute/styles/Uneminute.module.scss'
import useNavigation from '../../main/hooks/useNavigation'
import Credits from './Credits'
import HeartAnimation from './HeartAnimation'
import StartTimer from './StartTimer'
import Starter from './Starter'
import { musicPrompts } from './data/musicPrompts'
import { silentPrompts } from './data/silentPrompts'

const Title: NextPage = () => {
  const [displayPrompt, setDisplayPrompt] = useState(true)
  const [startMusic, setStartMusic] = useState(false)
  const [displayStartTimer, setDisplayStartTimer] = useState(false)
  const [displayAnimation, setDisplayAnimation] = useState(false)
  const [displayCredits, setDisplayCredits] = useState(false)

  const { redirectToHome } = useNavigation()

  const timeline = {
    start: 500, // 7000
    startWithMusic: 2200, //2200
    countdown: 3000, //3000
    oneMinute: 60000, //60000
    end: 15000, //10000
  }

  const startTime =
    timeline.start * silentPrompts.length + timeline.startWithMusic * musicPrompts.length

  useEffect(() => {
    if (displayPrompt) {
      setTimeout(() => {
        setDisplayPrompt(false)
        setDisplayStartTimer(true)
      }, startTime)
    }

    if (displayStartTimer) {
      setTimeout(() => {
        setDisplayStartTimer(false)
        setDisplayAnimation(true)
      }, timeline.countdown)
    }

    if (displayAnimation) {
      setTimeout(() => {
        setDisplayAnimation(false)
        setDisplayCredits(true)
      }, timeline.oneMinute)
    }

    if (displayCredits) {
      setTimeout(() => {
        redirectToHome()
      }, timeline.end)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayPrompt, displayCredits, displayStartTimer, displayAnimation])

  return (
    <div className={styles.container}>
      <section className={styles.main}>
        {displayPrompt ? (
          <Starter
            silentDisplayTime={timeline.start}
            musicDisplayTime={timeline.startWithMusic}
            setStartMusic={setStartMusic}
          />
        ) : (
          <></>
        )}

        {displayStartTimer ? <StartTimer /> : <></>}

        {displayAnimation ? <HeartAnimation /> : <></>}

        {displayCredits ? <Credits /> : <></>}
      </section>
    </div>
  )
}

export default Title

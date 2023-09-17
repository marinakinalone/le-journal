import type { NextPage } from "next"
import Head from "next/head"
import styles from "../../games/une-minute/styles/Uneminute.module.scss" // TODO: add module here
import { AudioPlayer } from "../../helpers/components"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Credits, Starter, HeartAnimation, StartTimer } from "."
import { silentPrompts } from "./data/silentPrompts"
import { musicPrompts } from "./data/musicPrompts"

const Title: NextPage = () => {
  const [displayPrompt, setDisplayPrompt] = useState(true);
  const [startMusic, setStartMusic] = useState(false);
  const [displayStartTimer, setDisplayStartTimer] = useState(false)
  const [displayAnimation, setDisplayAnimation] = useState(false);
  const [displayCredits, setDisplayCredits] = useState(false);

  const timeline = {
    start: 500, // 7000
    startWithMusic: 2200, //2200
    countdown: 3000, //3000
    oneMinute: 60000, //60000
    end: 15000 //10000
  }

  const startTime = (timeline.start * silentPrompts.length) + (timeline.startWithMusic * musicPrompts.length)


  const router = useRouter()

  const redirectToHome = () => {
    router.push("/")
  }

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        redirectToHome()
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

    if (displayPrompt) {
      setTimeout(() => {
        setDisplayPrompt(false);
        setDisplayStartTimer(true);
      }, startTime)
    }


    if (displayStartTimer) {
      setTimeout(() => {
        setDisplayStartTimer(false);
        setDisplayAnimation(true);
      }, timeline.countdown)
    }

    if (displayAnimation) {
      setTimeout(() => {
        setDisplayAnimation(false);
        setDisplayCredits(true);
      }, timeline.oneMinute)
    }

    if (displayCredits) {
      setTimeout(() => {
        redirectToHome()
      }, timeline.end)
    }

  }, [displayPrompt, displayCredits, displayStartTimer, displayAnimation])

  return (
    <div className={styles.container}>
      <Head>
        <title>une minute</title>
        <meta name="description" content="une minute, par mks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {startMusic ? (<AudioPlayer source={"./resources/une-minute/urtha1.wav"} />) : (<></>)}

        {displayPrompt ? (<Starter silentDisplayTime={timeline.start} musicDisplayTime={timeline.startWithMusic} setStartMusic={setStartMusic} />) : (<></>)}

        {displayStartTimer ? (<StartTimer />) : (<></>)}

        {displayAnimation ? (<HeartAnimation />) : (<></>)}

        {displayCredits ? (<Credits />) : (<></>)}

      </main>
    </div>
  )
}

export default Title

import type { NextPage } from "next"
import Head from "next/head"
import styles from "../../games/une-minute/styles/Uneminute.module.scss" // TODO: add module here
import { AudioPlayer } from "../../helpers/components"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Credits, Prompt } from "../../games/une-minute"

const Title: NextPage = () => {
  const [displayPrompt, setDisplayPrompt] = useState(true);
  const [displayAnimation, setDisplayAnimation] = useState(false);
  const [displayCredits, setDisplayCredits] = useState(false);


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
    setInterval(() => {
      setDisplayPrompt(false);
      setDisplayCredits(true);
    }, 10000)

  }, [displayPrompt, displayCredits])

  return (
    <div className={styles.container}>
      <Head>
        <title>une minute</title>
        <meta name="description" content="une minute, par mks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AudioPlayer source={"./resources/une-minute/urtha1.wav"} />
        {displayPrompt ? (<Prompt />) : (<></>)}
        {displayCredits ? (<Credits />) : (<></>)}
      </main>
    </div>
  )
}

export default Title

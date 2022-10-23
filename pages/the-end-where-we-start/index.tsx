import type { NextPage } from "next"
import Head from "next/head"
import styles from "../../games/the-end-where-we-start/styles/Tewws.module.scss"
import { textblocks } from "../../games/the-end-where-we-start/data/textblocks"
import { H1, H2, P } from "../../games/the-end-where-we-start"
import { AudioPlayer } from "../../helpers/components"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const TheEndWhereWeStart: NextPage = () => {
  const [index, setIndex] = useState(0)
  const router = useRouter()

  const displayTextBlock = (textblock: any) => {
    switch (Object.keys(textblock)[0]) {
      case "h1":
        return <H1 content={textblock.h1} />
      case "h2":
        return <H2 content={textblock.h2} />
      default:
        if (textblock.p === "nous commence.") {
          return (
            <p
              style={{
                paddingLeft: "39%",
                paddingTop: "25rem",
              }}
            >
              {textblock.p}
            </p>
          )
        }
        return <P content={textblock.p} />
    }
  }

  const redirectToHome = () => {
    router.push("/")
  }

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        redirectToHome()
      }
      if (event.key === "ArrowRight") {
        if (index + 1 === textblocks.length) {
          redirectToHome()
          return
        }
        setIndex(index + 1)
      }
      if (event.key === "ArrowLeft") {
        if (index !== 0) {
          setIndex(index - 1)
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const handleClick = () => {
    if (index + 1 === textblocks.length) {
      redirectToHome()
      return
    }
    setIndex(index + 1)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>the end where we start</title>
        <meta name="description" content="the end where we start, par mks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} onClick={() => handleClick()}>
        <AudioPlayer source={"./resources/the-end-where-we-start/wave.mp3"} />
        {displayTextBlock(textblocks[index])}
      </main>
    </div>
  )
}

export default TheEndWhereWeStart

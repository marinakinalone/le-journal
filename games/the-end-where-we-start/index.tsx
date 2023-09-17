import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "../../games/the-end-where-we-start/styles/Tewws.module.scss"
import AudioPlayer from "../../main/components/AudioPlayer"
import Headline from "./components/Headline"
import Paragraph from "./components/Paragraph"
import Title from "./components/Title"
import { textblocks } from "./data/textblocks"

const TheEndWhereWeStart: NextPage = () => {
  const [index, setIndex] = useState(0)
  const router = useRouter()

  const displayTextBlock = (textblock: any) => {
    switch (Object.keys(textblock)[0]) {
      case "h1":
        return <Headline content={textblock.h1} />
      case "h2":
        return <Title content={textblock.h2} />
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
        return <Paragraph content={textblock.p} />
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
